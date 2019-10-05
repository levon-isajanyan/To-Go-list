import Vue from 'vue' // Import Vue module
import VueMaterial from 'vue-material' // Import Vue material package
import 'vue-material/dist/vue-material.min.css' // Imoprt Vue material package defalut style
import 'vue-material/dist/theme/default.css'

//Middleware(load after every refresh) to use already imported Vue material package everywhere
Vue.use(VueMaterial)
