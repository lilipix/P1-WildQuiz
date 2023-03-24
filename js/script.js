import { questionsToQuiz} from "./questions.js";

// declarer position de la carte (Lyon)
const map = L.map('map').setView([45.76952, 4.83652], 14);
const answer = document.querySelector(".answer")
const modal = document.querySelector("section");
const button = document.querySelector(".exitButton");
const answers = document.querySelector(".answers");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answserD = document.querySelector(".answerD");
const instructions = document.querySelector("#instructions");
const goodAnswer = document.getElementById("goodAnswer");
const wrongAnswer = document.getElementById("wrongAnswer");
// const timer = document.getElementById("timer");


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


//* Creating markers and events of click in each marker

let marker1 = L.marker([45.76276, 4.84719]).addTo(map).on('click', onMapClick1)
let marker2 = L.marker([45.75786, 4.83218]).addTo(map).on('click', onMapClick2)
let marker3 = L.marker([45.75751, 4.83355]).addTo(map).on('click', onMapClick3)
let marker4 = L.marker([45.76577, 4.82861]).addTo(map).on('click', onMapClick4)
let marker5 = L.marker([45.76284, 4.82779]).addTo(map).on('click', onMapClick5)
let marker6 = L.marker([45.76038, 4.82669]).addTo(map).on('click', onMapClick6)
let marker7 = L.marker([45.77835, 4.85344]).addTo(map).on('click', onMapClick7)
let marker8 = L.marker([45.77948, 4.82838]).addTo(map).on('click', onMapClick8)
let marker9 = L.marker([45.76353, 4.85087]).addTo(map).on('click', onMapClick9)
let marker10 = L.marker([45.76191, 4.82724]).addTo(map).on('click', onMapClick10)

// let markers = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10]



  

  
// const timer = document.getElementById("timer")
// function timer2() {
//     let contDown = 30
//     setInterval(() => {
//         let clock = timer.innerText(`${contDown --}`)
//         return clock
//     }, 1000); 
    
// }

// timer2()




//* Functions to display the modal 

const popup = L.popup();
function onMapClick1(e) {
    // const timer = document.getElementById("timer")
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(
        `<div class="modal">
            <h2 class="modalQuestion">${pare1.question}</h2>
            
            <div class="answers">
            <label class="answer answerA">
                <div class="choix">A</div><div id="answerInsider">${pare1.answerA}</div>
            </label>
            <label class="answer answerB">
                <div class="choix">B</div><div id="answerInsider">${pare1.answerB}</div>
            </label>
            <label class="answer answerC">
                <div class="choix">C</div><div id="answerInsider">${pare1.answerC}</div>
            </label>
            <label class="answer answerD">
                <div class="choix">D</div><div id="answerInsider">${pare1.answerD}</div>
            </label>
            <div id="timer"></div>
            
        </div>

        
        
        </div>
        `,
        
    
    )
    .openOn(map);

    console.log(pare1.rightAnswer)

    const rightWrong = document.querySelectorAll(".answer");

    rightWrong[0].addEventListener("click", changeRightColor)
    rightWrong[1].addEventListener("click", changeWrongColor1)
    rightWrong[2].addEventListener("click", changeWrongColor2)
    rightWrong[3].addEventListener("click", changeWrongColor3)
    
    
    
    
    function changeRightColor() {
        rightWrong[0].style.backgroundColor = "Green"
        marker1.remove();
        goodAnswer.play();
    }

    function changeWrongColor1() {
        marker1.remove();
        rightWrong[0].style.backgroundColor = "Green";
        rightWrong[1].style.backgroundColor = "Red";
        wrongAnswer.play();
    }

    function changeWrongColor2() {
        marker1.remove();
        rightWrong[0].style.backgroundColor = "Green";
        rightWrong[2].style.backgroundColor = "Red";
        wrongAnswer.play();
    }

    function changeWrongColor3() {
        marker1.remove();
        rightWrong[0].style.backgroundColor = "Green";
        rightWrong[3].style.backgroundColor = "Red";
        wrongAnswer.play();
    }


}


function onMapClick2(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare2.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare2.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare2.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare2.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare2.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);

    
        const rightWrong = document.querySelectorAll(".answer");
        rightWrong[0].addEventListener("click", changeRightColor)
    
        for(let i = 1; i < 4; i++){
            console.log(rightWrong[i])
            rightWrong[i].addEventListener("click", changeWrongColor)
        }
        
        
        function changeRightColor() {
            rightWrong[0].style.backgroundColor = "Green"
            marker2.remove();
            
        }
    
        function changeWrongColor() {
            marker2.remove();
            rightWrong[0].style.backgroundColor = "Green"
            rightWrong[1].style.backgroundColor = "Red"
            
        }
        
}


function onMapClick3(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare3.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare3.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare3.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare3.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare3.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);

    
        const rightWrong = document.querySelectorAll(".answer");
        rightWrong[0].addEventListener("click", changeRightColor)
    
        for(let i = 1; i < 4; i++){
            console.log(rightWrong[i])
            rightWrong[i].addEventListener("click", changeWrongColor)
        }
        
        
        function changeRightColor() {
            rightWrong[0].style.backgroundColor = "Green"
            marker3.remove();
        }
    
        function changeWrongColor() {
            marker3.remove();
            rightWrong[0].style.backgroundColor = "Green"
            rightWrong[1].style.backgroundColor = "Red"
            
        }    

}


function onMapClick4(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare4.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare4.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare4.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare4.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare4.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);

        const rightWrong = document.querySelectorAll(".answer");
        rightWrong[0].addEventListener("click", changeRightColor)
    
        for(let i = 1; i < 4; i++){
            console.log(rightWrong[i])
            rightWrong[i].addEventListener("click", changeWrongColor)
        }
        
        
        function changeRightColor() {
            rightWrong[0].style.backgroundColor = "Green"
            marker4.remove();
        }
    
        function changeWrongColor() {
            marker4.remove();
            rightWrong[0].style.backgroundColor = "Green"
            rightWrong[1].style.backgroundColor = "Red"
            
        }

}


function onMapClick5(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare5.question}</h2>
        
        <div class="answers">
            <label class="answer answerA" onclick="trueOrFalse()">
                <div class="choix">A</div><div id="answerInsider">${pare5.answerA}</div>
            </label>
            <label class="answer answerB" onclick="trueOrFalse()">
                <div class="choix">B</div><div id="answerInsider">${pare5.answerB}</div>
            </label>
            <label class="answer answerC" onclick="trueOrFalse()">
                <div class="choix">C</div><div id="answerInsider">${pare5.answerC}</div>
            </label>
            <label class="answer answerD" onclick="trueOrFalse()">
                <div class="choix">D</div><div id="answerInsider">${pare5.answerD}</div>
            </label>
        </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);



    const rightWrong = document.querySelectorAll(".answer");
    rightWrong[0].addEventListener("click", changeRightColor)

    for(let i = 1; i < 4; i++){
        console.log(rightWrong[i])
        rightWrong[i].addEventListener("click", changeWrongColor)
    }
    
    
    function changeRightColor() {
        rightWrong[0].style.backgroundColor = "Green"
        marker5.remove();
    }

    function changeWrongColor() {
        marker5.remove();
        rightWrong[0].style.backgroundColor = "Green"
        rightWrong[1].style.backgroundColor = "Red"
        
    }

}


function onMapClick6(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare6.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare6.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare6.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare6.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare6.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);



    const rightWrong = document.querySelectorAll(".answer");
    rightWrong[0].addEventListener("click", changeRightColor)

    for(let i = 1; i < 4; i++){
        console.log(rightWrong[i])
        rightWrong[i].addEventListener("click", changeWrongColor)
    }
    
    
    function changeRightColor() {
        rightWrong[0].style.backgroundColor = "Green"
        marker6.remove();
    }

    function changeWrongColor() {
        marker6.remove();
        rightWrong[0].style.backgroundColor = "Green"
        rightWrong[1].style.backgroundColor = "Red"
        
    }

}


function onMapClick7(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare7.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare7.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare7.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare7.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare7.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);


    const rightWrong = document.querySelectorAll(".answer");
    rightWrong[0].addEventListener("click", changeRightColor)

    for(let i = 1; i < 4; i++){
        console.log(rightWrong[i])
        rightWrong[i].addEventListener("click", changeWrongColor)
    }
    
    
    function changeRightColor() {
        rightWrong[0].style.backgroundColor = "Green"
        marker7.remove();
    }

    function changeWrongColor() {
        marker7.remove();
        rightWrong[0].style.backgroundColor = "Green"
        rightWrong[1].style.backgroundColor = "Red"
        
    }

}


function onMapClick8(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare8.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare8.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare8.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare8.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare8.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);



    const rightWrong = document.querySelectorAll(".answer");
    rightWrong[0].addEventListener("click", changeRightColor)

    for(let i = 1; i < 4; i++){
        console.log(rightWrong[i])
        rightWrong[i].addEventListener("click", changeWrongColor)
    }
    
    
    function changeRightColor() {
        rightWrong[0].style.backgroundColor = "Green"
        marker8.remove();
    }

    function changeWrongColor() {
        marker8.remove();
        rightWrong[0].style.backgroundColor = "Green"
        rightWrong[1].style.backgroundColor = "Red"
        
    }

}


function onMapClick9(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare9.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare9.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare9.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare9.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare9.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);



    const rightWrong = document.querySelectorAll(".answer");
    rightWrong[0].addEventListener("click", changeRightColor)

    for(let i = 1; i < 4; i++){
        console.log(rightWrong[i])
        rightWrong[i].addEventListener("click", changeWrongColor)
    }
    
    
    function changeRightColor() {
        rightWrong[0].style.backgroundColor = "Green"
        marker9.remove();
    }

    function changeWrongColor() {
        marker9.remove();
        rightWrong[0].style.backgroundColor = "Green"
        rightWrong[1].style.backgroundColor = "Red"
        
    }

}


function onMapClick10(e) {
    instructions.style.display = "none";
    popup
        .setLatLng(e.latlng)
        .setContent(`<div class="modal">
        <h2 class="modalQuestion">${pare10.question}</h2>
        
        <div class="answers">
        <label class="answer answerA" onclick="trueOrFalse()">
            <div class="choix">A</div><div id="answerInsider">${pare10.answerA}</div>
        </label>
        <label class="answer answerB" onclick="trueOrFalse()">
            <div class="choix">B</div><div id="answerInsider">${pare10.answerB}</div>
        </label>
        <label class="answer answerC" onclick="trueOrFalse()">
            <div class="choix">C</div><div id="answerInsider">${pare10.answerC}</div>
        </label>
        <label class="answer answerD" onclick="trueOrFalse()">
            <div class="choix">D</div><div id="answerInsider">${pare10.answerD}</div>
        </label>
    </div>
        <!--timer
        <div id="timer"></div>
        <script src="timer.js"></script>-->
        </div>
    `)
        .openOn(map);

    
        const rightWrong = document.querySelectorAll(".answer");
        rightWrong[0].addEventListener("click", changeRightColor)
    
        for(let i = 1; i < 4; i++){
            console.log(rightWrong[i])
            rightWrong[i].addEventListener("click", changeWrongColor)
        }
        
        
        function changeRightColor() {
            rightWrong[0].style.backgroundColor = "Green"
            marker10.remove();
        }
    
        function changeWrongColor() {
            marker10.remove();
            rightWrong[0].style.backgroundColor = "Green"
            rightWrong[1].style.backgroundColor = "Red"
            
        }

}



