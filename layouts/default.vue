<template>
  <section>
    <div id="header" class="page-container md-layout-column">
      <md-toolbar id="toolbar" class="md-primary">
        <md-button class="md-icon-button md-raised" @click="showNavigation = true">
          <md-icon :icon="['fas','bars']"></md-icon>
        </md-button>
        <span class="md-title">
          <div class="logotext" data-text="Walkers">
            Walkers
          </div> 
        </span>

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true">
            {{HeaderLeftPanelString}}
          </md-button>
        </div>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">
            {{RightSideCollapseMenuString}}
          </span>
        </md-toolbar>

        <md-list>
          
          <md-list-item>
            <span class="md-list-item-text">
              <a @click="mainMapMethodCall()" href="#">
                 {{mainMenuFirstString}}
              </a>
            </span>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">
              <a @click="searchFormMethodCall()" href="#">
                {{mainMenuSecondString}}
              </a>
            </span>
          </md-list-item>

        </md-list>
      </md-drawer>

      <md-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">
            {{HeaderLeftSideMenuTitle}}
          </span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">
              <saved-form-icon v-if="savedContentBlockVisible"/>
            </span>
          </md-list-item>
        </md-list>
      </md-drawer>

      <md-content>
        <nuxt />
      </md-content>
    </div>
  </section>
</template>

<script>
import savedFormIcon from '~/components/SavedLocationContent/savedContentBlock' // Import saved icon content 
export default {
  name: 'PageLayout',
  data: () => ({
    showNavigation: false, // Left panel collapse show
    showSidepanel: false, // Right header panel collpase 
    HeaderLeftPanelString: 'Configuration', // Header right panel button text
    RightSideCollapseMenuString: 'Walker menu', // Header left side collapse menu text
    mainMenuFirstString: 'Walker choose place', // Header main menu first category string
    mainMenuSecondString: 'Previous places', // Header main menu first category string
    HeaderLeftSideMenuTitle: 'Option' // Right side panel title
  }),
  computed: {
    // Getter for saved conetent form visibility
    savedContentBlockVisible() {
      return this.$store.getters.savedContentBlockVisibility
    }
  },
  components: {
    savedFormIcon
  },
  methods: {
    // Method to show main map element
    mainMapMethodCall() {
      // Send marker last data to vuex
      this.$store.dispatch('showMainElement')
    },
    // Method to show saved places elemnt
    searchFormMethodCall() {
      this.$store.dispatch('showSavedPlacesElement')
    }
  }
}
</script>


<style lang="scss">

  /* Html body default configuration */
  html body {
    @include robotoRegular();
    overflow: $hidden;
  }

/* Header style block beginning */


  /* logo text animation */
  .logotext {
    @include robotoLight();
    @include textComplexValues(600, 1em, 0.5px);
    @include textGlitch("logotext", 17, $dark-blue, $white-color, $white-color, $sky-blue, 450, 115);
  }

  /* header hamburger parent */
  #header .md-icon-button {
    position: $relative;
    box-shadow: $none;
    @include topPosition(0);
  }

  /* header hamburger parent */
  #header .md-icon-button:hover {
    @include alpha-background-color(rgba($greenery, 0.8), $white-color);
    color: $white-color
  }

  /* Header menu iconstyle */
  #header .md-button-content {
    color: $dark-white;
  }

  #header .md-button:hover {
     @include alpha-background-color(rgba($greenery, 0.8), $white-color);
     color: $white-color!important;
  }

  #header .md-button:hover, #header .md-button-content:hover {
    color: $white-color!important;
  }

   /* header hamburger */
  #header .md-icon-button > svg {
    @include verticalHorizontalCalc($absolute, 50%, 50%, 50%, -50%);
  }

   /* header hamburger path */
  #header .md-icon-button > svg > path {
    fill: $dark-white;
  }

  /* Background color for header */
  #header .md-toolbar {
    background-color: $white-color;
    @include robotoLight();
  }

  #header .md-toolbar .md-title {
    color: $greenery;
  }

  /* Header right side menu style */
  #header .md-drawer.md-temporary.md-active {
    background-color: $white-color;
  }

  #header .md-drawer.md-temporary.md-active .md-button .md-ripple {
    @include paddingValues(0, 0, 0, 0);
  }

  #header .savedplaces .md-title {
    @include textComplexValues(500, 1em, 0.5px);
    color: $greenery;
  }

  #header .savedplaces i {
    @include widthValue(10%);
  }

  #header .dropinputstyle .md-menu > input {
    @include inputBottomBorder(1px, solid, $dark-white);
  }
/* Header style block ending */

</style>
