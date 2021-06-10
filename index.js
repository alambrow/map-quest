let map, infoWindow;

function initMap() {
  // map = new google.maps.Map(document.getElementById("map"), {
  //   center: { lat: 36.15470, lng: -86.78616 },
  //   zoom: 14.5,
  // });

  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "bar", weight: 5 },
      { type: "restaurant", weight: 1},
    ],
    maxPlaceCount: 12,
  });

  
  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 36.15470, lng: -86.78616 },
    zoom: 14,
  });
  
  infoWindow = new google.maps.InfoWindow();

//   // const locationButton = document.createElement("button");
//   // locationButton.textContent = "Pan to Current Location";
//   // locationButton.classList.add("custom-map-control-button");
//   // map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

//     // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Your location");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Geolocation disabled."
      : "Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}