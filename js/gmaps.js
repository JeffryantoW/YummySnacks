function initMap() {
        var myLatLng = {lat: -6.201102, lng: 106.784953};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Yummy Snack'
        });
    }