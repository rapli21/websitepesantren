// Membuat peta menggunakan Leaflet
var map = L.map('mapid').setView([-0.7893, 113.9213], 5); // Koordinat Indonesia

// Menambahkan layer peta dasar dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Memuat data GeoJSON dari file
fetch('data.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map); // Menambahkan data GeoJSON ke peta
    });
