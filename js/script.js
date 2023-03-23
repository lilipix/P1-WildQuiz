import { questionsToQuiz} from "./questions.js";

// declarer position de la carte (Lyon)
const map = L.map('map').setView([45.76952, 4.83652], 13);

const modal = document.querySelector("section");
const button = document.querySelector(".exitButton");
const answers = document.querySelector(".answers");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answserD = document.querySelector(".answerD");
const instructions = document.querySelector("#instructions");

//* Importing Leaflet map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 12,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//* Creating the class with parameters necessary t create a modal
class Marker {
    constructor(question, answerA, answerB, answerC, answerD, rightAnswer) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.rightAnswer = rightAnswer;
    }

}

//* Contructing all classes necessary fo the quiz 
const pare1 = new Marker(
    questionsToQuiz.questionSpecialiteCulinaire.question, 
    questionsToQuiz.questionSpecialiteCulinaire.answers.answerA, 
    questionsToQuiz.questionSpecialiteCulinaire.answers.answerB, 
    questionsToQuiz.questionSpecialiteCulinaire.answers.answerC, 
    questionsToQuiz.questionSpecialiteCulinaire.answers.answerD, 
    questionsToQuiz.questionSpecialiteCulinaire.rightAnswer 
)

const pare2 = new Marker(
    questionsToQuiz.questionPlaceStatue.question, 
    questionsToQuiz.questionPlaceStatue.answers.answerA, 
    questionsToQuiz.questionPlaceStatue.answers.answerB, 
    questionsToQuiz.questionPlaceStatue.answers.answerC, 
    questionsToQuiz.questionPlaceStatue.answers.answerD, 
    questionsToQuiz.questionPlaceStatue.rightAnswer 
)

const pare3 = new Marker(
    questionsToQuiz.questionPlaceArtise.question, 
    questionsToQuiz.questionPlaceArtise.answers.answerA, 
    questionsToQuiz.questionPlaceArtise.answers.answerB, 
    questionsToQuiz.questionPlaceArtise.answers.answerC, 
    questionsToQuiz.questionPlaceArtise.answers.answerD, 
    questionsToQuiz.questionPlaceArtise.rightAnswer 
)

const pare4 = new Marker(
    questionsToQuiz.questionTheatreLyon.question, 
    questionsToQuiz.questionTheatreLyon.answers.answerA, 
    questionsToQuiz.questionTheatreLyon.answers.answerB, 
    questionsToQuiz.questionTheatreLyon.answers.answerC, 
    questionsToQuiz.questionTheatreLyon.answers.answerD, 
    questionsToQuiz.questionTheatreLyon.rightAnswer 
)

const pare5 = new Marker(
    questionsToQuiz.questionTraboule.question, 
    questionsToQuiz.questionTraboule.answers.answerA, 
    questionsToQuiz.questionTraboule.answers.answerB, 
    questionsToQuiz.questionTraboule.answers.answerC, 
    questionsToQuiz.questionTraboule.answers.answerD, 
    questionsToQuiz.questionTraboule.rightAnswer 
)

const pare6 = new Marker(
    questionsToQuiz.questionQuartierHistorique.question, 
    questionsToQuiz.questionQuartierHistorique.answers.answerA, 
    questionsToQuiz.questionQuartierHistorique.answers.answerB, 
    questionsToQuiz.questionQuartierHistorique.answers.answerC, 
    questionsToQuiz.questionQuartierHistorique.answers.answerD, 
    questionsToQuiz.questionQuartierHistorique.rightAnswer 
)

const pare7 = new Marker(
    questionsToQuiz.questionBougieFenetre.question, 
    questionsToQuiz.questionBougieFenetre.answers.answerA, 
    questionsToQuiz.questionBougieFenetre.answers.answerB, 
    questionsToQuiz.questionBougieFenetre.answers.answerC, 
    questionsToQuiz.questionBougieFenetre.answers.answerD, 
    questionsToQuiz.questionBougieFenetre.rightAnswer 
)

const pare8 = new Marker(
    questionsToQuiz.questionQuartierDeCharme.question, 
    questionsToQuiz.questionQuartierDeCharme.answers.answerA, 
    questionsToQuiz.questionQuartierDeCharme.answers.answerB, 
    questionsToQuiz.questionQuartierDeCharme.answers.answerC, 
    questionsToQuiz.questionQuartierDeCharme.answers.answerD, 
    questionsToQuiz.questionQuartierDeCharme.rightAnswer 
)

const pare9 = new Marker(
    
    questionsToQuiz.questionChefCuisinier.question, 
    questionsToQuiz.questionChefCuisinier.answers.answerA, 
    questionsToQuiz.questionChefCuisinier.answers.answerB, 
    questionsToQuiz.questionChefCuisinier.answers.answerC, 
    questionsToQuiz.questionChefCuisinier.answers.answerD, 
    questionsToQuiz.questionChefCuisinier.rightAnswer 
)

const pare10 = new Marker( 
    questionsToQuiz.questionDiscretMusee.question, 
    questionsToQuiz.questionDiscretMusee.answers.answerA, 
    questionsToQuiz.questionDiscretMusee.answers.answerB, 
    questionsToQuiz.questionDiscretMusee.answers.answerC, 
    questionsToQuiz.questionDiscretMusee.answers.answerD, 
    questionsToQuiz.questionDiscretMusee.rightAnswer 
)




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

// let markers = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10]

// markers.forEach(marker => marker.addEventListener("click", something))

// marker1.addEventListener('click', handleClick(marker1));
// marker1.addEventListener('click', handleClick())

const popup = L.popup();
marker1.on('click', onMapClick);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare1.question}</h2>
        <p class="exitButton">Suivant</p>
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div>${pare1.answerA}
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div>${pare1.answerB}
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div>${pare1.answerC}
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div>${pare1.answerD}
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);
}








//* Function to display the modal with right class that was previos decalred

// function handleClick(marker) {
   
//     instructions.style.display = "none";
//     let modalPopUp = document.createElement("div")
//         modalPopUp.innerHTML =
//         `<div class="modal">
//             <h2 class="modalQuestion">${marker.question}</h2>
//             <p class="exitButton">Suivant</p>
//             <div class="answers">
//             <label class="answer answerA" onclick="trueOrFalse()">
//                 <div class="choix">A</div>${marker.answerA}
//             </label>
//             <label class="answer answerB" onclick="trueOrFalse()">
//                 <div class="choix">B</div>${marker.answerB}
//             </label>
//             <label class="answer answerC" onclick="trueOrFalse()">
//                 <div class="choix">C</div>${marker.answerC}
//             </label>
//             <label class="answer answerD" onclick="trueOrFalse()">
//                 <div class="choix">D</div>${marker.answerD}
//             </label>
//         </div>
//             <!--timer
//             <div id="timer"></div>
//             <script src="timer.js"></script>-->
//             </div>
//         `
//     modal.appendChild(modalPopUp)
//     // marker.question
    
// }


// function trueOrFalse(i) {
//     let element = document.querySelectorAll(".answers")
//     console.log(element)
//     if (i === rightAnswer) {
//         element.classList.add("green")
//     } else {
//         element.classList.add("red")
//     }

// }
