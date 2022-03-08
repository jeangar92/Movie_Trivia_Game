

let question = {
    question: "Who voices Joy in Pixar's Inside Out?",
    choices1to4: ['Amy Poehler', 'Tina Fey', 'Kathryn Hahn', 'Ellen DeGeneres'],
    correctAnswer: 0
}

let question2 = {
    question: "The code in The Matrix comes from what food recipes?",
    choices1to4: ['Sushi recipes', 'Dumpling recipes', 'Stir-fry recipes', 'Pad thai recipes'],
    correctAnswer: 0
}

let question3 = {
    question: "Who actually drew the sketch of Rose in Titanic?",
    choices1to4: ['James Cameron', 'Leonardo DiCaprio', 'SBilly Zane', 'Kathy Bates'],
    correctAnswer: 0
}

let question4 = {
    question: "Where were The Lord of the Rings movies filmed?",
    choices1to4: ['New Zealand', 'Ireland', 'Iceland', 'Australia'],
    correctAnswer: 0
}

let question5 = {
    question: "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",
    choices1to4: ['China', 'Vietnam', 'Sweden', 'France'],
    correctAnswer: 0
}


let question6 = {
    question: "Who did the cat in The Godfather belong to?",
    choices1to4: ['No one—the cat was a stray.', 'Al Pachino', 'Diane Keaton', 'Francis Ford Coppola'],
    correctAnswer: 0
}

let question7 = {
    question: "Which movie is this famous line from: “I wish I knew how to quit you.”",
    choices1to4: ['Brokeback Mountain', 'The Notebook', 'How to Lose a Guy in 10 Days', 'Love Actually'],
    correctAnswer: 0
}


let question8 = {
    question: "Which movie is this famous line from: “I wish I knew how to quit you.”",
    choices1to4: ['Captain America: The First Avenger ', 'Iron Man', 'Captain Marvel', 'Doctor Strange'],
    correctAnswer: 0
}

let question9 = {
    question: `Which movie is this quote from: “What's in the box?”`,
    choices1to4: ['Se7en', 'Speed', 'Reservoir Dogs', 'The Boondock Saints'],
    correctAnswer: 0
}

let question10 = {
    question: `Michael Myers’ mask in Halloween is which actor’s face?`,
    choices1to4: ['William Shatner', ' Clint Eastwood', 'Marlon Brando', 'Paul Newman'],
    correctAnswer: 0
}


function showQuestion(questionHere) {
    // 1 select dom element
    let printQuestion = document.getElementById('question')
    printQuestion.textContent = questionHere.question;
    // //selecting by a query
    let choices = document.querySelectorAll('.choice')
    choices.forEach(function(element, index){
        element.textContent = questionHere.choices1to4[index];
        
        element.addEventListener('click', function(){
            // check the correct answer
            if(questionHere.correctAnswer == index) {
                console.log('correct answer!')
            } else {
                console.log('Wrong Answer')
            }
        })
    })
}

showQuestion(question)
