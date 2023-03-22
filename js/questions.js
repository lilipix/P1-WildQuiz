//* Order of the questions
//* 1questionSpecialiteCulinaire
//* 2questionPlaceStatue
//* 3questionPlaceArtise
//* 4questionTheatreLyon
//* 5quesionTraboule
//* 6questionQuartierHistorique
//* 7questionBougieFenetre
//* 8questionQuartierDeCharme
//* 9questionChefCuisinier
//* 10questionDiscretMusee



//* Object with all the questions and answers for the quiz.
export const questionsToQuiz = {

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
        },
        rightAnswer: "answerA"
    },

    questionPlaceArtise: {
        question: "L’artiste, auteur de cette statue, aurait oublié un détail important, lequel?",

        answers: {
            answerA: "La queue du cheval",
            answerB: "Les étriers",
            answerC: "La selle",
            answerD: "Le bouclier de Captain America"
        },
        rightAnswer: "answerA"
    },

    questionTheatreLyon: {
        question: "De quel théâtre Lyon est-il le berceau?",

        answers: {
            answerA: "Le théâtre antique",
            answerB: "Le théâtre de Guignol",
            answerC: "La comedia del arte",
            answerD: "Le théâtre de boulevard (il y a beaucoup de boulevards à Lyon, c’est pour ça)"
        },
        rightAnswer: "answerA"
    },

    questionTraboule: {
        question: "A Lyon si on vous propose de “prendre une traboule”… il faut comprendre : ",

        answers: {
            answerA: "Une expression pour dire “Casser la croûte”",
            answerB: "On vous menace de prendre un poing dans la figure",
            answerC: "On vous propose de passer par une petite ruelle située entre deux rues parallèles",
            answerD: "C’est tellement obscène que je n’ose pas vous expliquer le sens de cette phrase…"
        },
        rightAnswer: "answerA"
    },

    questionQuartierHistorique: {
        question: "Comment s’appelle le quartier historique de Lyon, classé au patrimoinde de l’UNESCO?",

        answers: {
            answerA: "Saint-Thomas",
            answerB: "Saint-Jean",
            answerC: "Saint-Félicien",
            answerD: "Saint-Tropez (charmant quartier typiquement lyonnais)"
        },
        rightAnswer: "answerA"
    },

    questionBougieFenetre: {
        question: "Pour quelle occasion les Lyonnais mettent des bougies à leur fenêtre le 8 décembre de chaque année?",

        answers: {
            answerA: "La Fête des Lumières",
            answerB: "La Fête de la Saint-Jean",
            answerC: "La Fête des Canuts",
            answerD: "La grève annuelle d’EDF"
        },
        rightAnswer: "answerA"
    },

    questionQuartierDeCharme: {
        question: "Quartier de charme situé en haut d’une colline à Lyon et abritant autrefois les célèbres tisseurs lyonnais, je suis… ",

        answers: {
            answerA: "Le Point du Jour",
            answerB: "La Croix-Rousse",
            answerC: "Fourvière",
            answerD: "Time Square"
        },
        rightAnswer: "answerA"
    },

    questionChefCuisinier: {
        question: "Quel chef cuisinier triplement étoilé et mondialement renommé était établi en région lyonnaise?",

        answers: {
            answerA: "Paul Bocuse",
            answerB: "Cyril Lignac",
            answerC: "Georges Blanc",
            answerD: "Casimir (et son célèbre gloubiboulga)"
        },
        rightAnswer: "answerA"
    },

    questionDiscretMusee: {
        question: "Quel discret mais incontournable musée se situe en plein coeur du quartier Saint-Jean dans une maginifque bâtisse typiquement lyonnaise?",

        answers: {
            answerA: "Le musée d’Art Contemporain de Lyon",
            answerB: "Le musée des Marionettes",
            answerC: "Le musée de la Miniature et du Cinéma",
            answerD: "Le musée de la Tour Eiffel (ils manquaient de place à Paris alors…)"
        }, 
        rightAnswer: "answerA"
    }
}
