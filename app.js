

$(document).ready(function() {

    
    let listOfWords = ['elephant', 'headphones', 'dentist']

    
    

    //select one random word from the list
    let randomWord = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    let randomWordSplit = randomWord.split("");
    
    
    //creates a div surrounding the letter and a letter div
    for (i = 0; i<randomWord.length; i++) {
        $divAroundLetter = $('<div>').addClass('DivAroundLetter').css('border-style', 'solid');
        $('#guessLetters').append($divAroundLetter);
        $letter = $('<div>').addClass('letter').text(randomWordSplit[i]).css('color', 'lightblue');
        $divAroundLetter.append($letter);
    
    }

  
 
    //main game function
    const checkCorrectLetter = () => {
    //player guess
    let numOfGuesses = 0
    $('button').on('click', (event) => {
        let currentGuess = $(event.target).text().toLowerCase()
        $(event.target).prop('disabled', true);
        numOfGuesses++

        for (let i=0; i<randomWord.length; i++) {
            if (currentGuess == randomWord[i]) {
                $('.letter').eq(i).css('color', 'black').addClass('revealed')
                    //winning function
                    if ($('.letter').every('revealed')) {
                        alert('You win!')
                    }
                    
            }
        }
        

        }
        
    ) //end of button listener
} //end of correct letter function

    


checkCorrectLetter()

}); //end of jQuery function


