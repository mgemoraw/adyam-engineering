// geolocation.js

// const latitude = {{ latitude | default:'11.585044' }};
// const latitude  = {{latitude|default: 11.585044,}}
// const longitude = {{ longitude | default:'37.366117' }};
const latitude = '11.585044'
const longitude = '37.366117'

const map = L.map('map').setView([latitude, longitude], 16);

// Tile Layer
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
});

// Esri World Imagery (Satellite View)
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN'
});

osmLayer.addTo(map);

// Layer control to switch between maps
const baseLayers = {
    "Street View": osmLayer,
    "Satellite View": satelliteLayer
};

// L.control.layers(baseLayers).addTo(map);
L.control.layers(baseLayers, null, {
    position: 'bottomright'
}).addTo(map)

// Custom Icon
const customIcon = L.icon({
    iconUrl: '/static/icons/location.png', // 🧠 Change to your actual icon path
    iconSize: [38, 38], // width, height
    iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
});

// custom icon with pulse effect
const pulseIcon = L.divIcon({
    className: 'pulse-marker', // Applies CSS animation
    iconSize: [30, 30],
    html: `<div style="
        background: url('/static/icons/location.png') center no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;
    "></div>`
});

// Marker with Custom Icon and Popup Label
L.marker([latitude, longitude], { icon: pulseIcon})
    .addTo(map)
    .bindPopup('<strong>Adyam Head Office</strong><br>Visit us in person!')
    .openPopup();
