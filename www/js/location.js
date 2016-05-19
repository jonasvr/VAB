function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
}

function drivingStart(){
    console.log('in driving');

    getMapLocation();
    $('.content-container').addClass('top');
    $('.map-container').show();


    function onSuccess(position) {

        current.lat  = position.coords.latitude;
               current.lat  = current.lat.toFixed(6);
               current.long   = position.coords.longitude;
               current.long  = current.long.toFixed(6);

    //    var element = document.getElementById('info');
    //    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
    //                        'Longitude: ' + position.coords.longitude     + '<br />' +
    //                        '<hr />'      + element.innerHTML;

    $.each( locations, function( key, value ) {
        var dis = distance(current.lat,current.long,value.lat,value.long,'K');
            if (dis < maxDistance && value.passed == null && playing == 0) { //binnen bereik en is nog niet gebruikt
                console.log(key);
                        playing = 1;
                        value.sound.play();
                        value.passed = 1;
                        setTimeout(function(){
                            playing = 0;
                            console.log('in');
                        }, value.duration);
            }
        });
   }

   // onError Callback receives a PositionError object
   //
   function onError(error) {
       alert('code: '    + error.code    + '\n' +
             'message: ' + error.message + '\n');
   }

   // Options: throw an error if no update is received every 30 seconds.
   //
 watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}


// function onSuccess(position) {
//         current.lat  = position.coords.latitude;
//         current.lat  = current.lat.toFixed(6);
//         current.long   = position.coords.longitude;
//         current.long  = current.long.toFixed(6);
//
//     $.each( locations, function( key, value ) {
//         var dis = distance(current.lat,current.long,value.lat,value.long,'K');
//         if (dis < maxDistance && value.sound.passed == null && playing == 0) { //binnen bereik en is nog niet gebruikt
//             playing = 1;
//             value.sound.media.play()
//             value.sound.passed = 1;
//             setTimeOut(function{
//                     playing = 0;
//                 }, value.sound.duration);
//         }
//     });
// }
//
// // onError Callback receives a PositionError object
// //
// function onError(error) {
//     alert('code: '    + error.code    + '\n' +
//           'message: ' + error.message + '\n');
// }
//
// // Options: throw an error if no update is received every 30 seconds.
// //
// watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });





//Added visible mapstuff

// Get geo coordinates

function getMapLocation() {
    console.log('getMapLocation');

    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onMapSuccess = function (position) {
    console.log('onMapSuccess');

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);

}

// Get map by using coordinates

function getMap(latitude, longitude) {
  console.log('getMap: '+ latitude +','+ longitude);

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

// Success callback for watching your changing position

var onMapWatchSuccess = function (position) {
  console.log('onMapWatchSuccess');

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
}

// Error callback

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Watch your changing position

function watchMapPosition() {
  console.log('watchMapPosition');

    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });  
}
