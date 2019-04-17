function hMap() {

  //Step 1: initialize communication with the platform
  var platform = new H.service.Platform({
    'app_id': '{hLBtSVPLqp03fWYQp6qo}',
    'app_code': '{HUOWVrd4xXA1322kRD7jNQ}',
    'useHTTPS': true
  });

  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
  });

  //Step 2: initialize a map  - not specificing a location will give a whole world view.
  var map = new H.Map(
    document.getElementById('map'),
    defaultLayers.normal.map,
    {
      center: {lat: 46.82, lng: 2.3},
      zoom: 6,
      pixelRatio: pixelRatio
    }
  );

  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);

  // // Set the map to France
  // map.setCenter({lat:46.82, lng:2.3});
  // map.setZoom(6);

  // Now use the map as required...
  addMarkersToMap(map);
  addMarker(map, rouenMarker);

}

/**
 * Adds markers to the map highlighting the locations
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
  var parisMarker = new H.map.DomMarker({lat: 48.8567, lng: 2.3508});
  map.addObject(parisMarker);

  var issyMarker = new H.map.DomMarker({lat: 48.8239651, lng: 2.2539852});
  map.addObject(issyMarker);

  var oyonnaxMarker = new H.map.DomMarker({lat: 46.2599096, lng: 5.6167287});
  map.addObject(oyonnaxMarker);

  var contresMarker = new H.map.DomMarker({lat: 47.4209282, lng: 1.3850228});
  map.addObject(contresMarker);

  var aulnayMarker = new H.map.DomMarker({lat: 48.9457377, lng: 2.4569582});
  map.addObject(aulnayMarker);
}

var Ville = function(nom, lat, long) {
  this.name = nom;
  this.lat = lat;
  this.long = long;
}
var NewMarker = function(ville) {
  this.marker = new H.map.DomMarker({lat: ville.lat, lng: ville.long});
}

var rouen = new Ville('Rouen', 49.4412613, 1.0561542);
var rouenMarker = new NewMarker(rouen);


function addMarker(map, marker) {
  map.addObject(marker.marker);
}
