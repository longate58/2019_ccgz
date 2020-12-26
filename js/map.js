
    let myMap = L.map('myMap').setView([10.4769721, -66.5320073], 18)
        L.tileLayer(`https://c.tile.osm.org/{z}/{x}/{y}.png`, { //Fondo del mapa
    	maxZoom: 50, attribution: 'Tiles &copy; OpenStreetMap &mdash; Copyright: &copy;2020 Long Art Digital',

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
