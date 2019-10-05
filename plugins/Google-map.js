import Vue from 'vue' // Import Vue
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps2/src/main' // Import google maps port version for Vue2

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAL8fr8jZpG3Rw8tuaJTGo9yCgm1LSyxj4', // Api key from Google
        libraries: 'places',
        language: 'EN' // Map language
    }
})