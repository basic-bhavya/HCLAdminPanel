function initMap() {

  var loc = { lat: 20.593683, lng: 78.962883 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: loc });


  google.maps.event.addListener(map, "click",
    function (event) {
      addMarker({ coords: event.latlng });
    });
  /*
var marker = new google.maps.Marker({
  position: loc,
  map: map,
  title: 'this is the something',
  // icon: 'https://image.flaticon.com/icons/png/512/62/62501.png',
});

var infoWindow = new google.maps.infoWindow({
  content:'<h1>Dadri</h1>'
});

marker.addListener('click',function(){
  infoWindow.open(map,marker);
});*/

  addMarker({
    coords: { lat: 20.593683, lng: 78.962883 },
    // iconImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MnuDQu2TbBY0Sax8j0ku1gAAAA%26pid%3DApi&f=1'
  });
  addMarker({
    coords: { lat: 28.7041, lng: 77.1025 },
    content: '<h1>Hello</h1>'
  });


  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      title: 'this is the title'
    })

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    map.addListener('center_changed', function () {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function () {
        map.panTo(marker.getPosition());
      }, 3000);
    })

    marker.addListener('click', function (e) {
      
    });

    function placeMarkerAndPanTo(latLng, map) {
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
      map.panTo(latLng);
    }
  }
}

// var coordlist = [
//     [35.68206, 10.72746]
//     [7.1057357, 108.7066398]
//     [31.4311903, 62.0729285]
//     [7.1928, 108.6334]
//     [38.226652, 115.510218]
//     [5.8294025, 75.9928971]
//     [55.6735947, 12.5510678]
//     [50.909807, 22.8346659]
//     [0.97319, 124.674591]
//     [59.2873947, 17.9928445]
//     [52.362743, 21.0450997]
//     [35.14849, 36.03288]
// ];

// console.log(x);

// window.something = function (results) {
//     for (var i = 0; i < this.coordlist.length; i++) {
//         var coords = this.coordlist[i];
//         // var latLng = new google.maps.LatLng(coords[0], coords[1]);
//         // var marker = new google.maps.Marker({
//         //     position: latLng,
//         //     map: map
//         // });
//         console.log(coords);

//     }
// }