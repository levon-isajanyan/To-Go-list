<template>
    <md-autocomplete class="dropinputstyle" ref="dropDownInputRef" v-model="value" :md-options="countries" @md-changed="getCountries" @md-opened="getCountries">
      <label>{{inputDropLabel}}</label>
      <template slot="md-autocomplete-item" slot-scope="{ item }">Country:{{ item.Country }},Description:{{ item.WalkerDesc }},Long:{{ item.WalkerLong }}, Lat:{{ item.WalkerLat }}</template>
    </md-autocomplete>
</template>

<script>
export default {
    data: () => ({
      inputDropLabel: 'Saved places', // Label text
      value: null, // Choosed item v-model
      countryList: null, // Countrylist Option
      countries: [] // Md-option value
    }),
    updated() {
        // When dropdown element update assign getter to countrylist 
        this.countryList = this.$store.getters.filteredPlacesList
    },
    methods: {
       // Method to call when open or choosed something from dropsdown 
       getCountries (searchTerm) {
        this.countries = new Promise(resolve => {
          window.setTimeout(() => {
            if (!searchTerm) {
              resolve(this.countryList)
            } else {
              // Partly bypass ui library issue for more information see https://github.com/vuematerial/vue-material/issues/1243
              let choosedDropdownItem = this.$refs.dropDownInputRef.value
              // Send marker last data to vuex
              this.$store.dispatch('asyncFilteredhMarkerPlace', choosedDropdownItem )
              resolve(
                  // Via map filter array for variety destination 
                  this.countryList.filter(({ WalkerDesc }) => WalkerDesc),
                  this.countryList.filter(({ Country }) => Country),
                  this.countryList.filter(({ WalkerLong }) => WalkerLong ),
                  this.countryList.filter(({ WalkerLat }) => WalkerLat )
                )
            }
          }, 500)
        })
      }
    }
}
</script>

<style lang="scss">
    /* Drop input text */
    .dropinputstyle {
        @include robotoRegular();
        @include textComplexValues(500, 13px, 0.6px);
        color: $dark-white;
    }
    /* Drop input text */
    .dropinputstyle .md-input {
        @include inputBottomBorder(1px, solid, $dark-white);
    }

</style>
