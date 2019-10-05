<template>
  <!-- Google map canvas block -->
  <GmapMap
      id="googlemap"
      :center="mapCenter"
      :zoom="ZoomMap"
      :options="options"
  >
    <!-- Google map marker block -->
    <gmap-marker
      v-if="markerVisible"
      :position="markerCenter"
      :clickable="true"
      :draggable="markerDragableCondition"
      @drag="markerDragMethod"
      :icon="{ url: require('~/static/images/mapMarker.png')}"
      @click="markerClickMethod"
    ></gmap-marker>
    <!-- Google map marker location info block -->
    <gmap-info-window
        v-if="locationInfoBlockVisibility" 
        @closeclick="window_open=false" 
        :opened="window_open" 
        :position="infowindow"
        :options="{
              pixelOffset: {
                width: 0,
                height: -35
              }
            }"
    >
      <marker-form/>
    </gmap-info-window>  
  </GmapMap>
</template>

<script>
import markerForm from '~/components/MarkerForm/markerInputForm'
export default {
  name: 'index',
  data: () => ({
      mapCenter: { lat: 45.508, lng: -73.587 }, // Map center view lat & long
      markerCenter: { lat: 45.508, lng: -73.587 }, // Marker place view lat and long
      ZoomMap: 5, // Google map zoom value
      infowindow: { lat: 45.508, lng: -73.587 }, // Info window initial position
      window_open: false,
      options: {
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "stylers": [
                      {
                        "color": "#cecece"
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#757575"
                      },
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "labels.text",
                    "stylers": [
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#a7e163"
                      },
                      {
                        "visibility": "on"
                      },
                      {
                        "weight": 3.5
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#181818"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1b1b1b"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#2c2c2c"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8a8a8a"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#373737"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "stylers": [
                      {
                        "color": "#a7e163"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#3c3c3c"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#4e4e4e"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#000000"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#3d3d3d"
                      }
                    ]
                  }
        ]
      }
    }),
  components: {
    markerForm // Import place save form as component
  },
  computed: {
    // MArker visibility cgetter for vuex
    markerVisible() {
      return this.$store.getters.markerVisibility
    },
    // Info block visibility upon to marker
    locationInfoBlockVisibility() {
      return this.$store.getters.markerInformationWindowVisible
    },
    // MArker dragable condition, to prevent marker drag when user want see its saved places
    markerDragableCondition() {
      return this.$store.getters.markerDragCondition
    }
  },
  layout: 'default',
  updated() {
    // During component update check if vuex filtered state values are null or consist of values
    let filteredLongLat = this.$store.getters.filteredPosition;
    if(filteredLongLat.lat !== null & filteredLongLat.lng !== null & filteredLongLat.markerPreviewStatus == true) {
      this.markerCenter = filteredLongLat,
      this.mapCenter = filteredLongLat,
      this.infowindow = filteredLongLat
    } else if(filteredLongLat.lat == null & filteredLongLat.lng == null & filteredLongLat.markerPreviewStatus == true) {
      return false
    }
  },
  mounted() {
    this.$nextTick(() => {
      // Fit map height to screen code block beginning
      let windowInnerHeight = window.innerHeight;
      let headerElement = document.getElementById('toolbar');
      let headerHeight = headerElement.offsetHeight;
      let mapHeight = windowInnerHeight - headerHeight;
      let googlemapElem = document.getElementById('googlemap');
      googlemapElem.style.height = mapHeight + 'px';
      // Fit map height to screen code block ending
      window.addEventListener('resize', () => {
        // Fit map height to screen during resizing code block beginning
        let windowInnerHeightResize = window.innerHeight;
        let headerElementResize = document.getElementById('toolbar');
        let headerHeightResize = headerElementResize.offsetHeight;
        let mapHeightResize = windowInnerHeightResize - headerHeightResize;
        let googlemapElemResize = document.getElementById('googlemap');
        googlemapElemResize.style.height = mapHeightResize + 'px';
        // Fit map height to screen during resizing code block end
      })
		})
  },
  methods: {
    // Method to set lng & lat values to marker and infoWIndow when dragging marker
    markerDragMethod(location) {
      let locationLat = location.latLng.lat();
      let locationLng = location.latLng.lng();
      // Marker place set
      this.markerCenter = {
        lat: locationLat,
        lng: locationLng
      },
      // Marker info window place
      this.infowindow = {
        lat: locationLat,
        lng: locationLng
      },
      // Send marker last data to vuex
      this.$store.dispatch('asynchLatLngValue', this.markerCenter )
    },
    // Method to call marker infoWindow
    markerClickMethod(markLoc) {
      let InitlocationLat = markLoc.latLng.lat();
      let InitlocationLng = markLoc.latLng.lng();
      // Marker place set
      this.markerCenter = {
        lat: InitlocationLat,
        lng: InitlocationLng
      },
      // Marker info window place
      this.infowindow = {
        lat: InitlocationLat,
        lng: InitlocationLng
      },
      // Send marker last data to vuex
      this.$store.dispatch('asynchLatLngValue', this.markerCenter )
      this.window_open = true
    }
  }
}
</script>

<style lang="scss">
  /* Map conatiner style */
  .vue-map-container {
    @include widthValue(100% !important);
  }
</style>
