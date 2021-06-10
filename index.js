let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "bar" },
    ],
    maxPlaceCount: 20,
  });
  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 36.174465, lng: -86.767960 },
    zoom: 13,
  });
}