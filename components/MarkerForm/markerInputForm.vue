<template>
  <!-- Marker location saving form -->
  <form class="md-layout savelocation">
    <!-- Marker location saving form card -->
    <md-card class="md-card-layout-item">
      <!-- Marker location saving form title -->
      <md-card-header>
        <div class="md-title">
          <h1>
            {{formHeaderTitle}}    
          </h1>
        </div>
      </md-card-header>
      <!-- Marker location saving form body -->
      <md-card-content>
        <!-- Marker location saving form body datepicker -->
        <md-field>
          <date-picker-s v-model='datePickerModel'/>
        </md-field>
        <!-- Marker location saving form body textarea box for description -->
        <md-field>
          <textarea v-model="textAreaModel"/>
        </md-field>
      </md-card-content>
      <!-- Marker location saving form body save button block -->
      <md-card-actions>
          <regular-button :RegularButton="SaveButtonText" @click.native="saveLocationMethod()"/>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
import datePickerS from '~/components/uiKit/datePicker' // Import datepicker from uikit
import textArea from '~/components/uiKit/textArea' // Import text area from uikit
import regularButton from '~/components/uiKit/Button' // Import button from uikit 
export default {
  data: () => ({
    formHeaderTitle: 'Where are walkers', // Form header text
    SaveButtonText: 'Save', // Form save text
    textAreaModel: null, // Form text area model
    datePickerModel: null // Form date model
  }),
  computed: {
    //Getter for marker position
    markerPosition() {
      return this.$store.getters.markerPos
    },
  },
  components: {
    datePickerS, // Datepicker component
    regularButton // Default button component
  },
  methods: {
    // Method to send form data to vuex
    saveLocationMethod() {
      let self = this;
      if(this.datePickerModel !== null) {
        // Allow to submit button
        this.saveButtonDisable = false;
        // Geocoder feature assigning
        var geocoder = new google.maps.Geocoder;
        // Lat lng values from already stored vuex store
        var latlng = {lat: this.markerPosition.Lat, lng: this.markerPosition.Long};
        // Geocoder function to get lat and long
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              // Country short name
              let countryCode = results[1].formatted_address.split(',').pop().trim();
              // Assign values to object
              let dataTextValue = Object.assign({ text: self.textAreaModel, date: self.datePickerModel, country: countryCode });
              // Send text and date last data to vuex
              self.$store.dispatch('asynchDateTextValue', dataTextValue );
              // Set date model null
              self.datePickerModel = null;
              // Set textarea null
              self.textAreaModel = null;
              alert("Your new adress added")
            } else {
              window.alert('No results found')
            }
          }
        })
      } else {
        alert('oops please choose same date once more')
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  /* Form header text style */
  .savelocation .md-title {
    @include robotoRegular();
    @include textComplexValues(700, 1em, 0.5px);
    color: $dark-white;
    text-align: $text-center;
  }
  /* Form buttons style */
  .savelocation button {
    @include inputCompleteBorder(1px, solid, $dark-white);
  }
  /* Form button block style */
  .savelocation .md-card-actions {
    @include buttonShapes($none, 16px, 16px, 16px, 16px);
  }

  .savelocation .md-field.md-theme-default:after {
        background-color: $transparent!important;
    }
</style>
