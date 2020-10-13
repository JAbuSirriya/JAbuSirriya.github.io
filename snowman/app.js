

$(document).ready(function() {

//################################################################## Start Game Function  
    
const startGame = () => {

    // Format your code
    // Start with all global variables
    // Hook up my event handlers that don't rely on other functions
    // Lower level (helper) functions
    // Higher level functions
    // Note: You have to hook up event handlers after the function is declared

//################################################################### Winning function 
// match the correct guess length with the random word 
    const winningFunction = () => {
        console.log('winningFunction');
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
    let randomWord;
 



    //###################################### Generate Word Function
 const generateWord = () => {
    let randWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];
    console.log(randWord);
    let randomWordSplit = randWord.split("");

    //creates a div surrounding the letter and a letter div
    $('#guessLetters').empty()
    for (i = 0; i<randWord.length; i++) {
        $divAroundLetter = $('<div>').addClass('DivAroundLetter').css('border-style', 'solid');
        $('#guessLetters').append($divAroundLetter);
        $letter = $('<div>').addClass('letter').text(randomWordSplit[i]).css('color', 'lightblue');
        $divAroundLetter.append($letter);
    }

    return randWord;

} //end of generateWord function
//generateWord()


//############################################################################ More Global variables
    //array of correct guesses
    let correctGuesses = []
    let incorrectGuesses = []
    


//#################################################################### check correct letter handler 
    $('.button').on('click', (event) => {
        console.log('clicked');
        let currentGuess = $(event.target).text().toLowerCase()
        $(event.target).prop('disabled', true);

    //correct letters will show up in black 
        let foundLetter = false
        for (let i=0; i<randomWord.length; i++) {
            if (currentGuess == randomWord[i]) {
                foundLetter = true
                $correctLetter = ($('.letter').eq(i).css('color', 'black').addClass('revealed'))
                //sends correct letters to correctGuesses array
                correctGuesses.push($correctLetter)
            } 
        }
        if (foundLetter === false) {
            incorrectGuesses.push(currentGuess)
            console.log(incorrectGuesses)
        }

        winningFunction()
        losingFunction()
    })


    //######################################################### Reset Game function 
    const resetGame = () => {
        console.log('resetGame');
        correctGuesses = []
        incorrectGuesses = []
        $('.button').prop('disabled', false);
        randomWord = generateWord()

    }

    // // reset game button
    $('#reset').on('click', resetGame)
    resetGame();


} // end of main game function


startGame()

}); //end of jQuery function

