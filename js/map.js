
    let myMap = L.map('myMap').setView([10.4749721, -66.5320073], 16)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //Fondo del mapa
    	maxZoom: 60, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors - Long Art Digital',

    }).addTo(myMap);

    let iconMarker = L.icon({ //Agrega nuestro marcador
        iconUrl: 'img/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
    })

    let marker2 = L.marker([10.4769721, -66.5322674], { icon: iconMarker }).addTo(myMap)


//------------------------------------------------------
    // Capas de superposicón

    var MapaBase = {
      "OpenStreetMap": osm,
      "Satelital": esri
    };

    L.control.groupedLayers(MapaBase).addTo(map);


//---------------------------------------------------
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});