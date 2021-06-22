

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 53.4084, lng: -1.9916 },
  });
  setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const coords = [
  ["Concord 2, Brighton", 50.81732179999999,-0.12304610000001048, 1],
  ["Sheffield Arena, Sheffield", 53.40001609999999,-1.4189068000000589, 2],
  ["The SSE Hydro, Glasgow", 55.860156, -4.285257999999999, 3],
  ["Motorpoint Arena, Cardiff", 51.47893740000001,
  -3.1717228999999634, 4],
  ["The Roundhouse, London", 51.54340999999999,-0.1518045999999913, 5],
  ["O2 Academy Leeds, Leeds",53.8021884,-1.5471377000000075,6],
  ["Manchester Academy 3, Manchester", 53.4584061, -2.2322037000000137 ,7],
  ["O2 Forum Kentish Town, London",51.55219700000001,
  -0.14196900000001733, 8],
  ["Newcastle Metro Radio Arena, Newcastle", 54.9637977,
  -1.6232821999999487, 9],
  ["Emirates Old Trafford, Lancashire C.C.C", 53.456428, -2.2867969999999787, 10]
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < coords.length; i++) {
    const coord = coords[i];
    new google.maps.Marker({
      position: { lat: coord[1], lng: coord[2] },
      map,
      icon: image,
      shape: shape,
      title: coord[0],
      zIndex: coord[3],
    });
  }
}