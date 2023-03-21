let label = document.getElementById("question")
let map = L.map("map", {
    minZoom: 12,
    maxZoom: 15
});
const cartoAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const position = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: cartoAttribution


}).addTo (map);

map.setView([45.75046, 4.83948], 13)

let marker1 = L.marker([45.76276231, 4.84719]).addTo(map);

marker1.addEventListener("click", handleClick)

function handleClick() {
label.style.display = "block";


}
let marker2 = L.marker([45.75786, 4.83218]).addTo(map);
marker2.addEventListener("click", handleClick)

let marker3 = L.marker([45.75751, 4.83355]).addTo(map);
marker3.addEventListener("click", handleClick)

let marker4 = L.marker([45.76577, 4.82861]).addTo(map);
marker4.addEventListener("click", handleClick)

let marker5 = L.marker([45.76284, 4.82779]).addTo(map);
marker5.addEventListener("click", handleClick)

let marker6 = L.marker([45.76038, 4.82669]).addTo(map);
marker6.addEventListener("click", handleClick)

let marker7 = L.marker([45.77835, 4.85344]).addTo(map);
marker7.addEventListener("click", handleClick)

let marker8 = L.marker([45.77948, 4.82838]).addTo(map);
marker8.addEventListener("click", handleClick)

let marker9 = L.marker([45.81616, 4.84767]).addTo(map);
marker9.addEventListener("click", handleClick)

let marker10 = L.marker([45.76191, 4.82724]).addTo(map);
marker10.addEventListener("click", handleClick)
