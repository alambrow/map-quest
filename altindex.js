let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "bar" },
    ],
    maxPlaceCount: 12,
  });
  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 36.15470, lng: -86.78616 },
    zoom: 14,
  });

}