/**
 * Interactive Map for Sart-Kalmyk Villages
 * Supports multiple map providers: OpenStreetMap, Google, Yandex, Bing, 2Gis
 */

(function() {
  'use strict';

  // Map configuration
  const MAP_CENTER = [42.5050, 78.3850]; // Center near Karakol region
  const MAP_ZOOM = 12;
  
  // Map provider configurations
  const MAP_PROVIDERS = {
    osm: {
      name: 'OpenStreetMap',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    },
    google_streets: {
      name: 'Google Streets',
      url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      attribution: '&copy; Google Maps',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    },
    google_satellite: {
      name: 'Google Satellite',
      url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      attribution: '&copy; Google Maps',
      maxZoom: 20
    },
    google_hybrid: {
      name: 'Google Hybrid',
      url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
      attribution: '&copy; Google Maps',
      maxZoom: 20
    },
    yandex: {
      name: 'Yandex',
      url: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU',
      attribution: '&copy; <a href="https://yandex.ru/maps">Яндекс.Карты</a>',
      maxZoom: 19
    },
    yandex_satellite: {
      name: 'Yandex Satellite',
      url: 'https://sat01.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}',
      attribution: '&copy; <a href="https://yandex.ru/maps">Яндекс.Карты</a>',
      maxZoom: 19
    },
    bing_aerial: {
      name: 'Bing Aerial',
      url: 'https://ecn.t{s}.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1',
      attribution: '&copy; <a href="https://www.bing.com/maps">Bing Maps</a>',
      maxZoom: 19,
      subdomains: ['0', '1', '2', '3']
    },
    twogis: {
      name: '2GIS',
      url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1',
      attribution: '&copy; <a href="https://2gis.ru">2GIS</a>',
      maxZoom: 18
    }
  };

  // Village colors for polygons
  const VILLAGE_COLORS = {
    'Chelpek': '#e74c3c',
    'Borubash': '#3498db',
    'Tashkiya': '#2ecc71',
    'Burma-suu': '#9b59b6'
  };

  let map = null;
  let currentTileLayer = null;
  let villagesLayer = null;

  // Initialize map
  function initMap() {
    const mapContainer = document.getElementById('villages-map');
    if (!mapContainer) return;

    // Create map
    map = L.map('villages-map', {
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
      scrollWheelZoom: true
    });

    // Add default tile layer (OpenStreetMap)
    setMapProvider('osm');

    // Load village data
    loadVillages();

    // Add map controls
    addMapControls();
  }

  // Set map provider/tiles
  function setMapProvider(providerId) {
    const provider = MAP_PROVIDERS[providerId];
    if (!provider) return;

    // Remove current tile layer
    if (currentTileLayer) {
      map.removeLayer(currentTileLayer);
    }

    // Handle Bing maps specially (requires quadkey)
    if (providerId === 'bing_aerial') {
      currentTileLayer = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: provider.maxZoom,
        subdomains: provider.subdomains
      });
    } else {
      currentTileLayer = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: provider.maxZoom || 18
      });
    }

    currentTileLayer.addTo(map);
  }

  // Load villages GeoJSON
  function loadVillages() {
    const lang = document.documentElement.lang || 'ru';
    
    fetch('/assets/data/geo/villages.geojson')
      .then(response => response.json())
      .then(data => {
        if (villagesLayer) {
          map.removeLayer(villagesLayer);
        }

        villagesLayer = L.geoJSON(data, {
          style: function(feature) {
            if (feature.geometry.type === 'Polygon') {
              const color = VILLAGE_COLORS[feature.properties.name] || '#333';
              return {
                color: color,
                weight: 3,
                opacity: 1,
                fillColor: color,
                fillOpacity: 0.2,
                dashArray: '5, 5'
              };
            }
          },
          pointToLayer: function(feature, latlng) {
            if (feature.properties.type === 'city') {
              return L.circleMarker(latlng, {
                radius: 8,
                fillColor: '#f39c12',
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
              });
            }
            return L.marker(latlng);
          },
          onEachFeature: function(feature, layer) {
            const props = feature.properties;
            let name, description;
            
            // Get localized content
            if (lang === 'en') {
              name = props.name;
              description = props.description_en;
            } else if (lang === 'ky') {
              name = props.name_ky || props.name;
              description = props.description_ky;
            } else {
              name = props.name_ru || props.name;
              description = props.description_ru;
            }

            const popupContent = `
              <div class="village-popup">
                <h4>${name}</h4>
                <p>${description || ''}</p>
              </div>
            `;
            layer.bindPopup(popupContent);

            // Add tooltip with village name
            layer.bindTooltip(name, {
              permanent: false,
              direction: 'top',
              className: 'village-tooltip'
            });
          }
        });

        villagesLayer.addTo(map);

        // Fit bounds to show all villages
        const bounds = villagesLayer.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      })
      .catch(error => {
        console.error('Error loading villages:', error);
      });
  }

  // Add map provider selector control
  function addMapControls() {
    const container = document.getElementById('map-provider-selector');
    if (!container) return;

    // Listen for provider change
    container.addEventListener('change', function(e) {
      if (e.target.name === 'map-provider') {
        setMapProvider(e.target.value);
      }
    });
  }

  // Add legend
  function createLegend() {
    const legendContainer = document.getElementById('map-legend');
    if (!legendContainer) return;

    const lang = document.documentElement.lang || 'ru';
    
    let legendHTML = '<ul class="map-legend-list">';
    
    for (const [name, color] of Object.entries(VILLAGE_COLORS)) {
      let displayName = name;
      // Get localized names from translations if available
      if (lang === 'ru') {
        const names = {
          'Chelpek': 'Челпек',
          'Borubash': 'Борубаш',
          'Tashkiya': 'Ташкия',
          'Burma-suu': 'Бурма-суу'
        };
        displayName = names[name] || name;
      } else if (lang === 'ky') {
        const names = {
          'Chelpek': 'Челпек',
          'Borubash': 'Борубаш',
          'Tashkiya': 'Ташкия',
          'Burma-suu': 'Бурма-суу'
        };
        displayName = names[name] || name;
      }
      
      legendHTML += `
        <li>
          <span class="legend-color" style="background-color: ${color}; border-color: ${color};"></span>
          <span class="legend-label">${displayName}</span>
        </li>
      `;
    }
    
    legendHTML += '</ul>';
    legendContainer.innerHTML = legendHTML;
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the maps page
    if (document.getElementById('villages-map')) {
      // Wait for Leaflet to load
      if (typeof L !== 'undefined') {
        initMap();
        createLegend();
      } else {
        console.error('Leaflet library not loaded');
      }
    }
  });

})();
