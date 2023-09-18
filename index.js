function initMap() {
    var options = {
        center: { lat: 40.7128, lng: 74.0060 },
        zoom: 10 // You can adjust the zoom level as needed
    };

    var map = new google.maps.Map(document.getElementById('map'), options);

    // add marker
    var marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: 74.0060  },
        map: map
    });
}