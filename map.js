function initMap() {

  var loc = { lat: 20.5937, lng: 78.9629 };
  var map = new google.maps.Map(
  document.getElementById('map'), { zoom: 4, center: loc });
  var chart = document.getElementById('indiChart');
  var dataID = 0;
  var towerNames = "XYZB";

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
    title: 'Tower X'
    // iconImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MnuDQu2TbBY0Sax8j0ku1gAAAA%26pid%3DApi&f=1'
  });
  addMarker({
    coords: { lat: 28.7041, lng: 77.1025 },
    title: 'Tower Y'
  });
  addMarker({
    coords: {lat: 19.0760, lng: 72.8777 },
    title: 'Tower Z'
  })
  addMarker({
    coords: {lat: 26.2006, lng: 92.9376 },
    title: 'Tower B'
  })

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      title: props.title,
      animation: google.maps.Animation.DROP,
      towerName: towerNames[dataID],
      dataID: dataID++,
    })

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    marker.addListener('click', function (e) {
      var a = marker.towerName;

      if(marker.dataID==0) drawChart(plot1y,a,plot1a);
      else if(marker.dataID==1) drawChart(plot2y,a,plot1a);
      else if(marker.dataID==2) drawChart(plot3y,a,plot1a);
      else if(marker.dataID==3) drawChart(plot4y,a,plot1a);
    });

    marker.addListener('mouseover', function(){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });


    marker.addListener('mouseout',function(){
      marker.setAnimation(null);
    });

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