var latest;
function searchfun(){
    var ip = document.getElementById("formz").elements[0].value;
    if(latest==null){
        latest=ip;
    }
    else if(latest!=ip){
        latest=ip;
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });
        map.dragging.enable();
    }
    // window.location.reload();
    console.log(ip);
    var api_key = "at_Mk0Eba3JCfOYFlBHkYyaCsNniRxvz";
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
                var lati=data.location.lat;
                // console.log(lati);
                var longi=data.location.lng;
                document.querySelectorAll("td")[4].innerText=ip;
                document.querySelectorAll("td")[5].innerText=data.location.city + ", " + data.location.region + ", " + data.location.country;
                document.querySelectorAll("td")[6].innerText=data.location.timezone;
                document.querySelectorAll("td")[7].innerText=data.isp;
                var container = L.DomUtil.get('mapid');
                if(container != null){
                    container._leaflet_id = null;
                }
                var mymap = new L.map('mapid');
                mymap.setView(new L.LatLng(lati,longi), 13);
                var myIcon = new L.icon({
                    iconUrl: 'icon-location.png',
                    iconSize: [38, 46],
                    iconAnchor: [18.5, 50],
                });
                var marker=L.marker([lati,longi], {icon: myIcon}).addTo(mymap);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJvbmVyeWRlciIsImEiOiJja3FmaXo4NmIwcnd0MnhwZ3Nxcmlsc3ltIn0.JM57h9AtpO-XIL0YVodJ0w', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                }).addTo(mymap);
                
            }
        });
    });
}
function toggler() {
    var x = document.getElementById("mapid");
    var t=document.getElementsByClassName("t1");
    if (x.style.zIndex === "-1") {
        // t.style.display="none";
        x.style.zIndex = "+1";
        var y=document.querySelectorAll("button");
        y[1].textContent="Back";
    }
    else {
        // t.style.display="block";
        x.style.zIndex = "-1";
        var y=document.querySelectorAll("button");
        y[1].textContent="Access Map";
    }
  }
function refreshPage(){
    window.location.reload();
} 
/* <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> */





// Sample CODE:-
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(mymap);

// L.marker([51.5, -0.09]).addTo(mymap);


