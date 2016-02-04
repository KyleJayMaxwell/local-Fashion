$(document).on('ready', function(){

  // getting a new map from google and putting it on map-canvas
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    // putting the center at SF
    center: {lat: 37.773963, lng: -122.426273},
    // declaring how close (high is close, low is far)
    zoom: 13
  });

  // calling funtion 
  initMap(map);

});

// declaring a function of initmap, that takes a map
function initMap(map) {

  // finding the user location function
  navigator.geolocation.getCurrentPosition(function(position) {
    // setting location of the user to the center
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    // making map center
    map.setCenter(pos);

    // creating markers empty array
    var markers = [];
    //declaring marker variable
    var marker;
    // list of store data, name, lat, long
    var locations = [
      ['Andrisen Morton', 39.720622, -104.950710],
      ['Armitage & McMillan', 39.757202, -105.008315],
      ['Axel\'s', 39.640907, -106.374441],
      ['Berkeley Supply', 39.774877, -105.044190],
      ["Blackland Clothing Company", 40.521796, -105.060545],
      ['Family Affair', 39.753788, -104.991790],
      ['The Garment District', 39.669606, -104.941051],
      ['Jiberish', 39.757510, -105.007335],
      ['Lawrence Covell', 39.720082, -104.950170],
      ['Nod And Rose', 40.018872, -105.279926],
      ['Players Clothing', 39.750620, -105.001291],
      ['Soul Haus', 39.743384, -104.971299],
      ['Station', 39.755390, -104.977441],
      ['Steadbrook', 39.715683, -104.987232],
      ['Sully & Co', 39.753281, -105.023863],
      ['Topo Designs Boulder', 40.017401, -105.283126],
      ['Topo Designs Denver Flagship', 39.757709, -104.986164],
      ['Topo Designs Fort Collins', 40.586244, -105.076525],
      ['Weekends Boulder', 40.017774, -105.279765],
      ['Winter Session', 39.757352, -104.974607]
    ];

    //for loop to go through all the stores
    for (i = 0; i < locations.length; i++) {  
      //make new marker in google maps
      marker = new google.maps.Marker({
        position: {
          //declaring lat by the store value
          lat: locations[i][1],
          // determining the long of a store by value
          lng: locations[i][2]
        },
        // calling this to the map
        map: map,
        // making the title the store name
        title: locations[i][0]
      });
      // pushing each marker to the array
      markers.push(marker);
    }

    // drawing circle
    search_area = {
      // circle color
      strokeColor: '#FF0000',
      // opacity of circle
      strokeOpacity: 0.8,
      // how big the stroke is
      strokeWeight: 2,
      // center is the  pos
      center : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      radius : 2200
    };

    // search area is now the size of the circle
    search_area = new google.maps.Circle(search_area);
    // setting area in map
    search_area.setMap(map);

    // finding markers inside circle
    var bounds = search_area.getBounds();

    // searching to each if any of the markers are in the area
    var markersWithinBounds = markers.filter(function(marker){
      return bounds.contains(marker.getPosition());
    });

    console.log(markersWithinBounds);
    // calling a function with the pins in the area
    closestStores(markersWithinBounds);


  });

}

// making a function called closest stores that takes an array
function closestStores(arr){
 // searching through an array
  for(i=0;i<arr.length;i++){
    // appends the array title to closeStores ul id.
    $('#closeStores').append('<li>'+arr[i]["title"]+'</li>');
  }
}
