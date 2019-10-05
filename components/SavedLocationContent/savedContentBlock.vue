<template>
    <!-- Already saved location form -->  
    <form class="md-layout savedplaces">
         <!-- Already saved location card -->
         <md-card class="md-card-layout-item">
            <!-- Already saved location form title -->
            <md-card-header>
                <div class="md-title">
                    <h1>
                        {{visitedFormPlacesTitle}}    
                    </h1>
                </div>
            </md-card-header>
            <!-- Already saved location form body -->
            <md-card-content>
                <!-- Already saved location form body datepicker -->
                <md-field>
                    <date-picker v-model="filterDateModel"/>
                </md-field>
                <!-- Already saved location form body dropdown places -->
                <md-field v-if="formDropListVisibile">
                    <form-drop-list/>
                </md-field>
            </md-card-content>
            <!-- Already saved location form button block -->
            <md-card-actions>
                <default-button :RegularButton="ShowSavedPlacesText" @click.native="findPlaces()"/>
            </md-card-actions>
         </md-card>
    </form>
</template>

<script>
import formDropList from '~/components/uiKit/autoCompleteInput' // Import dropdown list
import datePicker from '~/components/uiKit/datePicker' // Import dropdown list
import defaultButton from '~/components/uiKit/Button' // Import button
export default {
    data: () => ({
        visitedFormPlacesTitle: 'Walker place', // Saved places form input
        ShowSavedPlacesText: 'Find walker', // Show saved places button text
        filterDateModel: null
    }),
    computed: {
        // Getter for form saved places dropdown
        formDropListVisibile() {
            return this.$store.getters.formDropVisibility
        }
    },
    components: {
        formDropList, // Dropdown element statement as component 
        datePicker, // Datepicker component
        defaultButton, // Deafult button register 
    },
    methods: {
        // Method to invoke when client click ont find form
        findPlaces() {
            if(this.filterDateModel !== null) {
                // Search people places via synch
                this.$store.dispatch('asynchPeopleFind', this.filterDateModel)
            } else {
                return false
            }
        }
    }
}
</script>

<style lang="scss">
    /* Form header text style */
  .savedplaces .md-title {
    @include robotoRegular();
    @include textComplexValues(700, 1em, 0.5px);
    color: $dark-white;
    text-align: $text-center;
  }
    /* Form buttons style */
  .savedplaces button {
    @include inputCompleteBorder(1px, solid, $dark-white);
  }
  /* Form button block style */
  .savedplaces .md-card-actions {
    @include buttonShapes($none, 16px, 16px, 16px, 16px);
  }
</style>
