import Vue from 'vue' // Import Vue
import { config,library } from '@fortawesome/fontawesome-svg-core' //Import core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //Import cue-fontawesome
import { faBars } from '@fortawesome/free-solid-svg-icons' //IMport Icons

config.autoAddCss = false

// Register the component globally
Vue.component('md-icon', FontAwesomeIcon)

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faBars)