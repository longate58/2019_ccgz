var mbAttr =
   'Datos del Mapa &copy; Colaboradores de <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
   '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ';


let myMap = L.map('myMap').setView([10.4769721, -66.5320073], 18)
    var osm = L.tileLayer(`https://c.tile.osm.org/{z}/{x}/{y}.png`, { //Fondo del mapa
	maxZoom: 50, attribution: 'Tiles &copy; OpenStreetMap &mdash; Copyright: &copy;2020 Long Art Digital',



}).addTo(myMap);

    let iconMarker = L.icon({ //Agrega nuestro marcador
        iconUrl: 'img/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
})

let marker2 = L.marker([10.4749721, -66.5320073], { icon: iconMarker }).addTo(myMap)

            // Agrega la capa de visualizacion de las coordenadas 
            // cuando se hace clic en el mapa 
            // ---------------------------
            var c = new L.Control.Coordinates();
            c.addTo(map);

            function onMapClick(e) {
                c.setCoordinates(e);
            }

            map.on('click', onMapClick);
            //--------------------------------



//------------------------------------------------------
    // Capas de superposicón agrupadas

    var MapaBase = {
      "Mapa base gris": gris,
      "OpenStreetMap": osm,
      "Topografía Base": esritopo,      
      "Topografía Terreno": terreno,
      "Topografía+Caminos": opentopomap,
      "Topografía+Ríos": Esri_DeLorme_layer,
      "Satelital": esri
      }
