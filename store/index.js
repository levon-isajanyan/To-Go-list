import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state: {
            currentLocation: {
                CountryShortName: null,
                Date: null,
                Long: null,
                Lat: null,
                Description: null
            }, // Current location place
            allSavedLocationArray: [], // Saved lcoation massive array
            localFilterArray: null, // Filtered places array
            markerShow: true, // Marker visibility
            savedLocationFormBlockVisible: false, // Already saved location vblock visibility
            searchSaveLocationFormVisible: false, // Save location form visible 
            savedLocationListVisibility: false, // Saves location Dropdown input list visibility 
            placeSearchButtonDisable: true, // Places search button disable
            markerPopupWindowVisible: true, // Popup window visibility
            filteredMarkerPosition: {
                markerPreviewStatus: false,
                lat: null,
                lng: null
            }, // Statement for saved marker place and status
            isMarkerDragable: true // Marker dragable condition
        },
        getters: {
            //Getters for currentLocation
            markerPos: state => {
                return state.currentLocation
            },
            // Getter for marker icon visibility
            markerVisibility: state => {
                return state.markerShow
            },
            // Getter for saved content form visibility
            savedContentBlockVisibility: state => {
                return state.savedLocationFormBlockVisible
            },
            // Getter for saved places search dropdown visibility
            formDropVisibility: state => {
                return state.savedLocationListVisibility
            },
            // Getter for marker popup window visibility
            markerInformationWindowVisible: state => {
                return state.markerPopupWindowVisible
            },
            // Getter forfiltered location array in filter input dropdown
            filteredPlacesList: state => {
                return state.localFilterArray
            },
            // Getter for marker filtered position values
            filteredPosition: state => {
                return state.filteredMarkerPosition
            },
            // Getter for marker dragable condition
            markerDragCondition: state => {
                return state.isMarkerDragable
            }
        },
        mutations: {
            //Mutation to push current value into saved value array
            pushCurrentLocValues(state, payload) {
                state.currentLocation.CountryShortName = payload.country,
                state.currentLocation.Description = payload.text,
                state.currentLocation.Date = payload.date;
                // Assign current location value to new object for preventing Vuex caveat during push into array in mutation
                let arrayObject = Object.assign({
                    Country: state.currentLocation.CountryShortName, 
                    WalkerDate: state.currentLocation.Date, 
                    WalkerLong: state.currentLocation.Long, 
                    WalkerLat: state.currentLocation.Lat, 
                    WalkerDesc: state.currentLocation.Description
                });
                // Store already assigned object to exciting massiv
                state.allSavedLocationArray.push(arrayObject)
            }
        },
        actions: {
            //Dispatch for marker lat & lng value
            asynchLatLngValue({state}, markerLatLng) {
                state.currentLocation.Long = markerLatLng.lng,
                state.currentLocation.Lat = markerLatLng.lat
            },
            // Dispatch for saved data text and date
            asynchDateTextValue({commit}, savedDateText) {
                commit('pushCurrentLocValues', savedDateText)
            },
             // Mutation when click in search navigation menu
             showSavedPlacesElement({state}) {
                state.isMarkerDragable = false,
                state.savedLocationFormBlockVisible = true,
                state.markerShow = false,
                state.markerPopupWindowVisible = false
            }, 
             // Mutation when click in main menu
             showMainElement({state}) {
                state.filteredMarkerPosition.markerPreviewStatus = false
                state.isMarkerDragable = true, 
                state.savedLocationFormBlockVisible = false,
                state.markerShow = true,
                state.savedLocationListVisibility = false
                state.markerPopupWindowVisible = true
            },
            // Mutation for aynch peole find
            asynchPeopleFind({state}, filterValue) {
                let savedPlacesMassive = state.allSavedLocationArray;
                let filteredArray = savedPlacesMassive.filter(function(filteredElement) {
                    return JSON.stringify(filteredElement.WalkerDate) == JSON.stringify(filterValue)
                });
                // Check if filtered array is empty or not then proceed
                if (filteredArray === undefined || filteredArray.length == 0) {
                    state.savedLocationListVisibility = false, 
                    state.markerShow = false,
                    alert('Events not found')
                } else {
                    state.savedLocationListVisibility = true,
                    alert('Congratulation you have' + ' ' + filteredArray.length + ' ' + 'events')
                    state.localFilterArray = filteredArray
                }
            },
            // Asynch action for choosed already saved place value
            asyncFilteredhMarkerPlace({state}, markerFIlteredInfo) {
                if(typeof markerFIlteredInfo === 'object') {
                    alert('Dont worry we have cathced and preceed your selected place, you see [object object], beacuse of UI library issue'),
                    state.filteredMarkerPosition.lat = markerFIlteredInfo.WalkerLat,
                    state.filteredMarkerPosition.lng = markerFIlteredInfo.WalkerLong,
                    state.filteredMarkerPosition.markerPreviewStatus = true,
                    state.isMarkerDragable = false,
                    state.markerShow = true
                } else if(typeof markerFIlteredInfo === 'string') {
                    alert('Oops it was technical issue, to prevent further process please choose same alue again')
                    return false
                }
            }
        }
    })
}

export default createStore