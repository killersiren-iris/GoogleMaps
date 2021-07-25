function initMap(){
    var options = {
        zoom:3,
        center:{lat:20.5937,lng:78.9629}
    }
    var map = new google.maps.Map(document.getElementById('map'),options)
 var markers = [
        {
            coords: {lat:23.4241,lng:53.8478},
            content: '<h1>UAE</h1>'
        },
        {
            coords: {lat:37.0902,lng:95.7129},
            content: '<h1>America</h1>'
        },
        {
            coords: {lat:35.8617,lng:104.1954},
            content: '<h1>China</h1>'
        }
    ]
 for(var i=0; i<markers.length; i++){
        addMarker(markers[i])
    }
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        })
        if(props.content){
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener('click',function(){
                infowindow.open(map,marker)
            })
        }
    }
}