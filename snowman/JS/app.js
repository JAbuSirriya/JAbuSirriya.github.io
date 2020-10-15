

$(document).ready(function() {

//################################################################## Start Game Function  
    
const startGame = () => {

//################################################################### Winning function 
//win modal pops open when player wins
const openModal = () => {
    $('#winModal').css('display', 'block');
  }
//close win button modal 
const closeModal = () => {
    $('#winModal').css('display', 'none');
  }
//event listener to close win modal
$('#closeWinButton').on('click', closeModal);

// match the correct guess length with the random word 
    const winningFunction = () => {
        if (correctGuesses.length == randomWord.length) {
        console.log('You win!')
        setTimeout(openModal, 1000);
        score++
        $currentScore.text("Correct number of words: " + score)
        }

    } //end of winning function


    // ###########################################################losing function
    //Lose modal pops open when player wins
const openLoseModal = () => {
    $('#loseModal').css('display', 'block');
  }
//close Lose button modal 
const closeLoseModal = () => {
    $('#loseModal').css('display', 'none');
  }
//event listener to close Lose modal
$('#closeLoseButton').on('click', closeLoseModal);


 const losingFunction = () => {
    if (incorrectGuesses.length === 7) {
        $('.button').prop('disabled', true);
        console.log('You lose!')
        setTimeout(openLoseModal, 1000);
    } 
} //end of losing function


    // Global Variables ##################################################
    let listOfWords = ['elephant', 'headphones', 'dentist', 'egg', 'lamp']


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
        $letter = $('<div>').addClass('letter').text(randomWordSplit[i]).css('color', 'white');
        $divAroundLetter.append($letter);
    }

    return randWord;

} //end of generateWord function
//generateWord()


//############################################################################ More Global variables
    //array of correct guesses
    let correctGuesses = []
    let incorrectGuesses = []
    
    
    //game score
    let score = 0;
    let $currentScore = $('<div>').addClass('score').text("Correct number of words: " + score).css({'background-color': '#F8B229', 'font-weight': 'bold', 'font-size': '20px', 'height': '50px', 'width': '200px', 'border': '4px solid black', 'border-radius': '12px'})
    $('#numOfGuesses').append($currentScore);


    //guesses left global functions
    let guessLeft = 7
    let $guessesLeft = $('<div>').addClass('guessesLeft').text("Number of incorrect guesses left: " + guessLeft).css({'background-color': '#F8B229', 'font-weight': 'bold', 'font-size': '20px', 'height': '50px', 'width': '200px', 'border': '4px solid black', 'border-radius': '12px'})
    $('#numOfGuesses').append($guessesLeft);

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
            incorrectGuesses.push(currentGuess);
            $("#snowmanImage").attr("src", "Images/" + incorrectGuesses.length + ".png");
            guessLeft--
            $($guessesLeft.text("Number of incorrect guesses left: " + guessLeft));
        }
        

        // $numOfGuessesLeft = 7 - (incorrectGuesses.length);
        // guessLeft = $numOfGuessesLeft
        
        
    

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
        $("#snowmanImage").attr("src", "Images/0.png");
        guessLeft = 7;
        $($guessesLeft.text("Number of incorrect guesses left: " + guessLeft));

    }

    // // reset game button
    $('#reset').on('click', resetGame)
    resetGame();



} // end of main game function



//###################################Adding CSS
//event listener for game instructions button
// Grabbing About the Game button
const $openInstructionsBtn = $('#openGameInstructions');
// Grabbing modal element
const $instructionsModal = $('#instructionsModal');
// Grabbing close button
const $closeBtn = $('#close');

//Event Handlers
const openInstructions = () => {
    $instructionsModal.css('display', 'block');
  }
  
  const closeInstructions = () => {
    $instructionsModal.css('display', 'none');
  }
  
  //Event Listeners
  $openInstructionsBtn.on('click', openInstructions);
  
  $closeBtn.on('click', closeInstructions);

startGame()

}); //end of jQuery function


