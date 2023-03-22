

//carte leaflet
// declarer position de la carte (Lyon)
const map = L.map('map').setView([45.76952, 4.83652], 13);
const modal = document.querySelector("section");
const button = document.querySelector(".exitButton");
const answers = document.querySelector(".answers");
const ansA = document.querySelector(".ansA");
const ansB = document.querySelector(".ansB");
const ansC = document.querySelector(".ansC");
const ansD = document.querySelector(".ansD");
const answer = document.querySelectorAll["answer"];

const instructions = document.querySelector("#instructions");

// importer carte 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 12,
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//marqueurs



//questions
const questionsToQuiz = {

    questionSpecialiteCulinaire: {
        question: "Quelle spécialité culinaire a fait la réputation de Lyon?",

        answers: {
            answerA: "La cervelle de canut",
            answerB: "Le gratin de coquillettes au jambon",
            answerC: "Les canelés",
            answerD: "Le Donut’s, Hou pinaise c’est bon!"
        },
        rightAnswer: "answerA"
    },

    questionPlaceStatue: {
        question: "Sur la Place Bellecour trône la statue de ….? ",

        answers: {
            answerA: "Louis XIV sur son cheval",
            answerB: "Jeanne d’Arc sur son cheval",
            answerC: "Cyrano de Bergerac sur son cheval",
            answerD: "Shrek sur son âne"
        }
    },

    questionPlaceArtise: {
        question: "L’artiste, auteur de cette statue, aurait oublié un détail important, lequel?",

        answers: {
            answerA: "La queue du cheval",
            answerB: "Les étriers",
            answerC: "La selle",
            answerD: "Le bouclier de Captain America"
        }
    },

    questionTheatreLyon: {
        question: "De quel théâtre Lyon est-il le berceau?",

        answers: {
            answerA: "Le théâtre antique",
            answerB: "Le théâtre de Guignol",
            answerC: "La comedia del arte",
            answerD: "Le théâtre de boulevard (il y a beaucoup de boulevards à Lyon, c’est pour ça)"
        }
    },

    questionTraboule: {
        question: "A Lyon si on vous propose de “prendre une traboule”… il faut comprendre : ",

        answers: {
            answerA: "Une expression pour dire “Casser la croûte”",
            answerB: "On vous menace de prendre un poing dans la figure",
            answerC: "On vous propose de passer par une petite ruelle située entre deux rues parallèles",
            answerD: "C’est tellement obscène que je n’ose pas vous expliquer le sens de cette phrase…"
        }
    },

    questionQuartierHistorique: {
        question: "Comment s’appelle le quartier historique de Lyon, classé au patrimoinde de l’UNESCO?",

        answers: {
            answerA: "Saint-Thomas",
            answerB: "Saint-Jean",
            answerC: "Saint-Félicien",
            answerD: "Saint-Tropez (charmant quartier typiquement lyonnais)"
        }
    },

    questionBougieFenetre: {
        question: "Pour quelle occasion les Lyonnais mettent des bougies à leur fenêtre le 8 décembre de chaque année?",

        answers: {
            answerA: "La Fête des Lumières",
            answerB: "La Fête de la Saint-Jean",
            answerC: "La Fête des Canuts",
            answerD: "La grève annuelle d’EDF"
        }
    },

    questionQuartierDeCharme: {
        question: "Quartier de charme situé en haut d’une colline à Lyon et abritant autrefois les célèbres tisseurs lyonnais, je suis… ",

        answers: {
            answerA: "Le Point du Jour",
            answerB: "La Croix-Rousse",
            answerC: "Fourvière",
            answerD: "Time Square"
        }
    },

    questionChefCuisinier: {
        question: "Quel chef cuisinier triplement étoilé et mondialement renommé était établi en région lyonnaise?",

        answers: {
            answerA: "Paul Bocuse",
            answerB: "Cyril Lignac",
            answerC: "Georges Blanc",
            answerD: "Casimir (et son célèbre gloubiboulga)"
        }
    },

    questionDiscretMusee: {
        question: "Quel discret mais incontournable musée se situe en plein coeur du quartier Saint-Jean dans une maginifque bâtisse typiquement lyonnaise?",

        answers: {
            answerA: "Le musée d’Art Contemporain de Lyon",
            answerB: "Le musée des Marionettes",
            answerC: "Le musée de la Miniature et du Cinéma",
            answerD: "Le musée de la Tour Eiffel (ils manquaient de place à Paris alors…)"
        }
    }
}


let marker1 = [L.marker([45.76276, 4.84719]).addTo(map), questionsToQuiz.questionSpecialiteCulinaire]
let marker2 = [L.marker([45.75786, 4.83218]).addTo(map)]
let marker3 = [L.marker([45.75751, 4.83355]).addTo(map)]
let marker4 = [L.marker([45.76577, 4.82861]).addTo(map)]
let marker5 = [L.marker([45.76284, 4.82779]).addTo(map)]
let marker6 = [L.marker([45.76038, 4.82669]).addTo(map)]
let marker7 = [L.marker([45.77835, 4.85344]).addTo(map)]
let marker8 = [L.marker([45.77948, 4.82838]).addTo(map)]
let marker9 = [L.marker([45.76353, 4.85087]).addTo(map)]
let marker10 = [L.marker([45.76191, 4.82724]).addTo(map)]

let markers = { marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10 }
console.log(markers)

//markers.forEach(marker => marker.addEventListener("click", handleClick))
markers[0].addEventListener("click", handleClick)


// fonction pour afficher le modal avec les questions
//import { questionsToQuiz } from './questions.js'
//console.log(questionsToQuiz)


//console.log(questionsToQuiz.questionSpecialiteCulinaire.answers.answerA[1])
function handleClick(event) {
    instructions.style.display = "none";
    console.log(marker1)

    if (event.latlng.lat === 45.76276 && event.latlng.lng === 4.84719) {
        let modalPopUp = document.createElement("div")
        modalPopUp.innerHTML =

            `<div class="modal">
    <h2 class="modalQuestion">${questionsToQuiz.questionSpecialiteCulinaire.question}</h2>
    <p class="exitButton">Suivant</p>
    <div class="answers">
    <label class="answer ansA" onclick="trueOrFalse(${questionsToQuiz.questionSpecialiteCulinaire.answers.answerA})">
        <div class="choix">A</div>
        </label>
    <label class="answer ansB" onclick="trueOrFalse(${questionsToQuiz.questionSpecialiteCulinaire.answers.answerB})">
        <div class="choix">B</div>
    </label>
    <label class="answer ansC" onclick="trueOrFalse(${questionsToQuiz.questionSpecialiteCulinaire.answers.answerC})">
        <div class="choix">C</div>
    </label>
    <label class="answer ansD" onclick="trueOrFalse(${questionsToQuiz.questionSpecialiteCulinaire.answers.answerD})">
        <div class="choix">D</div>
    </label>
    </div>
<!--timer
    <div id="timer"></div>
    <script src="timer.js"></script>-->
    </div>`

        modal.appendChild(modalPopUp)

    }

}

function trueOrFalse(i) {
    let element = document.querySelectorAll(".answers")
    console.log(element)
    if (i === rightAnswer) {
        element.classList.add("green")
    } else {
        element.classList.add("red")
    }

}
