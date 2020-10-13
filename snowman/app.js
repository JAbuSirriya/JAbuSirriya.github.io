

$(document).ready(function() {

    
 
//################################################################## Start Game Function  
    
const startGame = () => {

//################################################################### Winning function 
// match the correct guess length with the random word 
    const winningFunction = () => {
        if (correctGuesses.length == randomWord.length) {
        console.log('You win!')
        }

    } //end of winning function


    // ########################################################### losing function
    const losingFunction = () => {
        if (incorrectGuesses.length === 7) {
            $('.button').prop('disabled', true);
            console.log('You lose!')
        } 
    } //end of losing function


    // Global Variables ##################################################
    let listOfWords = ['elephant', 'headphones', 'dentist']


    //select one random word from the list
    let randomWord = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    let randomWordSplit = randomWord.split("");



    //######################################################### Reset Game function 
    // const resetGame = () => {
    // numOfGuesses = [];
    // $('.button').prop('disabled', false);
    // generateWord()
    // checkCorrectLetter()

    // }

    // // // reset game button
    // $('#reset').on('click', resetGame())



    //###################################### Generate Word Function
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


//############################################################################ More Global variables
    //array of correct guesses
    let correctGuesses = []
    let incorrectGuesses = []
    


//#################################################################### check correct letter function
    const checkCorrectLetter = () => {
    $('.button').on('click', (event) => {
        let currentGuess = $(event.target).text().toLowerCase()
        $(event.target).prop('disabled', true);

    

    //correct letters will show up in black 
        for (let i=0; i<randomWord.length; i++) {
        if (currentGuess == randomWord[i]) {
        $correctLetter = ($('.letter').eq(i).css('color', 'black').addClass('revealed'))
        //sends correct letters to correctGuesses array
        correctGuesses.push($correctLetter)
        } else if (currentGuess != randomWord[i]) {
            const num =+ 1
            incorrectGuesses.push(num)
            break
        }

        }
        
        winningFunction()
        losingFunction()
    } 
    )



 } //end of checkCorrectLetter
checkCorrectLetter()




} // end of main game function


startGame()

}); //end of jQuery function


