<template>
  <div>
    <input
      id="origin-input"
      class="controls"
      type="text"
      placeholder="Enter an origin location"
    />

    <input
      id="destination-input"
      class="controls"
      type="text"
      placeholder="Enter a destination location"
    />
  </div>
  <div id="my-map" ref="myMap"></div>
</template>

<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { LoaderOptions } from '@googlemaps/js-api-loader'

const config = useRuntimeConfig().public
const myMap = ref(null)

const loader = new Loader({
  apiKey: config.MAPS_API_KEY as string,
  version: 'weekly' as LoaderOptions['version'],
  libraries: ['places'],
})

function initMap(): void {
  loader
    .load()
    .then((google) => {
      const map = new google.maps.Map(myMap.value as HTMLElement, {
        center: { lat: 43.65107, lng: -79.347015 },
        zoom: 9,
      })
      new AutocompleteDirectionsHandler(map)
    })
    .catch((err) => {
      console.error(err)
    })
}

class AutocompleteDirectionsHandler {
  map: google.maps.Map
  originPlaceId: string
  destinationPlaceId: string
  travelMode: google.maps.TravelMode
  directionsService: google.maps.DirectionsService
  directionsRenderer: google.maps.DirectionsRenderer

  constructor(map: google.maps.Map) {
    this.map = map
    this.originPlaceId = ''
    this.destinationPlaceId = ''
    this.travelMode = google.maps.TravelMode.DRIVING
    this.directionsService = new google.maps.DirectionsService()
    this.directionsRenderer = new google.maps.DirectionsRenderer()
    this.directionsRenderer.setMap(map)

    const originInput = document.getElementById(
      'origin-input'
    ) as HTMLInputElement
    const destinationInput = document.getElementById(
      'destination-input'
    ) as HTMLInputElement

    // Specify just the place data fields that you need.
    const originAutocomplete = new google.maps.places.Autocomplete(
      originInput,
      { fields: ['place_id'] }
    )

    // Specify just the place data fields that you need.
    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput,
      { fields: ['place_id'] }
    )

    this.setupPlaceChangedListener(originAutocomplete, 'ORIG')
    this.setupPlaceChangedListener(destinationAutocomplete, 'DEST')

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput)
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      destinationInput
    )
  }

  setupPlaceChangedListener(
    autocomplete: google.maps.places.Autocomplete,
    mode: string
  ) {
    autocomplete.bindTo('bounds', this.map)

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()

      if (!place.place_id) {
        window.alert('Please select an option from the dropdown list.')
        return
      }

      if (mode === 'ORIG') {
        this.originPlaceId = place.place_id
      } else {
        this.destinationPlaceId = place.place_id
      }
      this.route()
    })
  }

  route() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return
    }

    const me = this

    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: this.travelMode,
      },
      (response, status) => {
        if (status === 'OK') {
          me.directionsRenderer.setDirections(response)
          console.log(response.routes[0].legs[0].distance.text)
          console.log(response.routes[0].legs[0].duration.text)
          console.log(response.routes[0].legs[0].start_address)
          console.log(response.routes[0].legs[0].end_address)
        } else {
          window.alert('Directions request failed due to ' + status)
        }
      }
    )
  }
}

onMounted(() => {
  initMap()
})
</script>

<style scoped>
/*
 * Always set the map height explicitly to define the size of the div element
 * that contains the map.
 */
#my-map {
  height: 35rem;
  width: 100%;
}

/*
 * Optional: Makes the sample page fill the window.
 */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#origin-input,
#destination-input {
  background-color: #fff;
  font-family: Roboto, serif;
  font-size: 15px;
  font-weight: 300;
  margin-left: 12px;
  padding: 0 11px 0 13px;
  text-overflow: ellipsis;
  width: 200px;
}

#origin-input:focus,
#destination-input:focus {
  border-color: #4d90fe;
}
</style>
