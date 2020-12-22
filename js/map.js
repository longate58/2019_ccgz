let myMap = L.map('myMap').setView([10.4749721, -66.5320073], 16)
L.tileLayer(`https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png`, { //Fondo del mapa
	maxZoom: 20,
}).addTo(myMap);

    let iconMarker = L.icon({ //Agrega nuestro marcador
        iconUrl: 'img/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
})

let marker2 = L.marker([10.4769721, -66.5320073], { icon: iconMarker }).addTo(myMap)