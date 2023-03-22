//import { questionsToQuiz } from "./questions.js";
//console.log(questionsToQuiz)


//carte leaflet
// declarer position de la carte (Lyon)
const map = L.map('map').setView([45.75046, 4.83948], 13);
const modal = document.querySelector("section");
const button = document.querySelector("exitButton");
const answers = document.querySelector("answers");
const answerA = document.querySelector("answerA");
const answerB = document.querySelector("answerB");
const answerC = document.querySelector("answerC");
const answerD = document.querySelector("answerD");
const answer = document.querySelectorAll["answer"];



// importer carte 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 12,
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//marqueurs

let marker1 = L.marker([45.76276, 4.84719]).addTo(map);
let marker2 = L.marker([45.75786, 4.83218]).addTo(map);
let marker3 = L.marker([45.75751, 4.83355]).addTo(map);
let marker4 = L.marker([45.76577, 4.82861]).addTo(map);
let marker5 = L.marker([45.76284, 4.82779]).addTo(map);
let marker6 = L.marker([45.76038, 4.82669]).addTo(map);
let marker7 = L.marker([45.77835, 4.85344]).addTo(map);
let marker8 = L.marker([45.77948, 4.82838]).addTo(map);
let marker9 = L.marker([45.76353, 4.85087]).addTo(map);
let marker10 = L.marker([45.76191, 4.82724]).addTo(map);

let markers = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10]
console.log(markers)

markers.forEach(marker => marker.addEventListener("click", handleClick))


// fonction pour afficher le modal avec les questions
function handleClick(event) {
    //if (event.latlng.lat === 45.76276 && event.latlng.lng === 4.84719) {
    let modalPopUp = document.createElement("div")
    modalPopUp.innerHTML =

        `<div class="modal">
    <h2 class="modalQuestion">My question</h2>
    <p class="exitButton">x</p>
    <div class="answers">
        <label class="answer answerA">Answer1</label>
        <label class="answer answerB">Answer2</label>
        <label class="anwser answerC">Answer3</label>
        <label class="anwser answerD">Answer4</label>
    </div>
    <!--timer
    <div id="timer"></div>
    <script src="timer.js"></script>-->
    </div>`

    modal.appendChild(modalPopUp)
}
//}
