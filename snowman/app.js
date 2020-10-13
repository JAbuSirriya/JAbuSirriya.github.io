

$(document).ready(function() {

    
 
//################################################################## Start Game Function  
    
const startGame = () => {
    let listOfWords = ['elephant', 'headphones', 'dentist']


    //select one random word from the list
    let randomWord = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    let randomWordSplit = randomWord.split("");


 const generateWord = () => {
    //creates a div surrounding the letter and a letter div
    for (i = 0; i<randomWord.length; i++) {
        $divAroundLetter = $('<div>').addClass('DivAroundLetter').css('border-style', 'solid');
        $('#guessLetters').append($divAroundLetter);
        $letter = $('<div>').addClass('letter').text(randomWordSplit[i]).css('color', 'lightblue');
        $divAroundLetter.append($letter);
    }

} //end of generateWord function
generateWord()
//############################################################################

    //array of correct guesses
    let correctGuesses = []
    //player guess
    let numOfGuesses = 0

//#################################################################### check correct letter function
    const checkCorrectLetter = () => {
    $('.button').on('click', (event) => {
        let currentGuess = $(event.target).text().toLowerCase()
        $(event.target).prop('disabled', true);
        numOfGuesses++
    

    //correct letters will show up in black 
        for (let i=0; i<randomWord.length; i++) {
            if (currentGuess == randomWord[i]) {
            $correctLetter = ($('.letter').eq(i).css('color', 'black').addClass('revealed')) 

            //sends correct letters to correctGuesses array
            correctGuesses.push($correctLetter)
            }
        }
        
    })
    console.log(randomWord.length)
    console.log(correctGuesses.length)
 } //end of checkCorrectLetter
checkCorrectLetter()

//################################################################### Winning function 

    // winning function, match the correct guess length with the random word 
        const winningFunction = () => {
            if (correctGuesses.length == randomWord.length) {
            console.log(randomWord.length)
            console.log(correctGuesses.length)
            console.log('You win!')
            }
    
        } //end of winning function
winningFunction()
    

//############################################################### Losing function
    
    // losing function
    const losingFunction = () => {
        if (numOfGuesses === 7) {
            $('.button').prop('disabled', true);
            console.log('You lose!')
        }
        
    } //end of losing function
losingFunction()



  //######################################################### Reset Game function  
    
    //reset game function
    // const resetGame = () => {
    //     numOfGuesses = [];
    //     $('.button').prop('disabled', false);
    //     generateWord()
    //     checkCorrectLetter()

    //     }
    
    // // reset game button
    // $('#reset').on('click', resetGame())



} //main game function


startGame()

}); //end of jQuery function


