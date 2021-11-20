
//Find out the user's latitude and longitude
var myLat = position.coords.latitude;
var myLng = position.coords.longitude;


function startUp() {
  initMap()

}

//Initialising the Google Maps
//https://developers.google.com/maps/documentation/javascript/markers
//Takes latitude and longitude as inputs to draw a map with marker on the user's position
function initMap() {
  const myLatLng = { lat: myLat, lng: myLng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

//Nearby search to find the closest trash bank?
//https://developers.google.com/maps/documentation/places/web-service/search-nearby#maps_http_places_nearbysearch-txt
//What does this output??
function findBank() {
  var axios = require('axios');

  var config = {
    method: 'get',
    //Make url depending on the user's latitude and longitude
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + toString(myLat) + '%2C' + toString(myLng) + '&radius=1500&keyword=bank%20sampah&key=AIzaSyDo2D2IF2jBJQ7nH62Sm4AyidwR5SZy9S0',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}