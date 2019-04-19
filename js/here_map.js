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
  if ($(document).width() < 768) {
    var map = new H.Map(
      document.getElementById('map'),
      defaultLayers.normal.map,
      {
        center: {lat: 46.82, lng: 2.3},
        zoom: 5,
        pixelRatio: pixelRatio
      }
    );
  } else {
    var map = new H.Map(
      document.getElementById('map'),
      defaultLayers.normal.map,
      {
        center: {lat: 46.82, lng: 2.3},
        zoom: 6,
        pixelRatio: pixelRatio
      }
    );
  }

  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);

  // Now use the map as required...
  addDomMarkersToMap(listVilleCapRallye, map);
  addMarkersToMap(listVilleCapClasse, map);


}

/**
 * Adds DOM markers to the map highlighting the locations
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addDomMarkersToMap(list, map) {
  for (let i of list) {
    let x = new Ville(i.name, i.lat, i.long);
    let xMark = new NewDomMarker(x);
    addMarker(map, xMark);
  }
}

/**
 * Adds markers to the map highlighting the locations
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(list, map) {
  for (let i of list) {
    let x = new Ville(i.name, i.lat, i.long);
    let xMark = new NewMarker(x);
    addMarker(map, xMark);
  }
}


var listVilleCapRallye = [
  {name: "Paris", lat: 48.8567, long: 2.3508},
  {name: "Issy-les-Moulineaux", lat: 48.8239651, long: 2.2539852},
  {name: "Oyonnax", lat: 46.2599096, long: 5.6167287},
  {name: "Contres", lat: 47.4209282, long: 1.3850228},
  {name: "Aulnay-sous-Bois", lat: 48.9457377, long: 2.4569582},
  {name: "Rouen", lat: 49.4412613, long: 1.0561542},
  {name: "Les Andelys", lat: 49.2390527, long: 1.3890418},
  {name: "Roubaix", lat: 50.6887117, long: 3.166711},
  {name: "Bourg-en-Bresse", lat: 46.2027027, long: 5.2118922},
  {name: "Evreux", lat: 49.0180127, long: 1.1046823},
  {name: "Pierrefitte-sur-Seine", lat: 48.9604032, long: 2.3461349},
  {name: "Strasbourg", lat: 48.5690923, long: 7.6920547},
  {name: "Gien", lat: 47.7174531, long: 2.5986176},
  {name: "Mantes-la-Jolie", lat: 48.9961091, long: 1.673688},
  {name: "Clamart", lat: 48.7957437, long: 2.2342939},
  {name: "Chalon-sur-Saône", lat: 46.7896397, long: 4.8154261},
  {name: "Melun", lat: 48.5421361, long: 2.6377199},
  {name: "Nice", lat: 43.7031691, long: 7.1827776},
  {name: "Bourges", lat: 47.0780327, long: 2.3632841},
  {name: "Pornic", lat: 47.1301317, long: -2.1268649},
  {name: "Montpellier", lat: 43.6100166, long: 3.8391422},
  {name: "Dammarie-les-Lys", lat: 48.5146512, long: 2.6024104}
]

var listVilleCapClasse = [
  {name: "Paris", lat: 48.8567, long: 2.3508},
  {name: "Roubaix", lat: 50.6887117, long: 3.166711},
  {name: "Mantes-la-Jolie", lat: 48.9961091, long: 1.673688},
  {name: "Gien", lat: 47.7174531, long: 2.5986176},
  {name: "Chalon-sur-Saône", lat: 46.7896397, long: 4.8154261},
  {name: "Orly", lat: 48.7402657, long: 2.3854979},
  {name: "Le Plessis-Bouchard", lat: 48.8567, long: 2.2251182},
  {name: "Torcy", lat: 49.0030022, long: 2.6300575},
  {name: "Poilly-Lez-Gien", lat: 48.712715, long: 1.0264841},
  {name: "Varennes-Jarcy", lat: 48.8567, long: 2.3508},
  {name: "Bagnolet", lat: 48.8670932, long: 2.4165162},
  {name: "Saint-Denis", lat: 48.9267902, long: 2.3306642},
  {name: "Anzin-Saint-Aubin", lat: 50.3206157, long: 2.7208995},
  {name: "Cesson", lat: 48.5695592, long: 2.5718294},
  {name: "Vigny", lat: 49.0810971, long: 1.9121214},
  {name: "Bobigny", lat: 48.9073176, long: 2.4256404}
]

var Ville = function(nom, lat, long) {
  this.name = nom;
  this.lat = lat;
  this.long = long;
}

var NewMarker = function(ville) {
  this.marker = new H.map.Marker({lat: ville.lat, lng: ville.long});
}
var NewDomMarker = function(ville) {
  this.marker = new H.map.DomMarker({lat: ville.lat, lng: ville.long});
}

function addMarker(map, marker) {
  map.addObject(marker.marker);
}


var domElement = document.createElement('div');
domElement.classList.add('div_icon');
domElement.style.width = '20px';
domElement.style.height = '20px';
domElement.style.borderRadius = '10px';
domElement.style.backgroundColor = 'red';

function changeOpacity(evt) {
  evt.target.style.fill = 0.5;
};
function changeOpacityBack(evt) {
  evt.target.style.opacity = 1;
};


var domIcon = new H.map.Icon(domElement);
