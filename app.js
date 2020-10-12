

$(document).ready(function() {

    
    let listOfWords = ['elephant', 'headphones', 'dentist']

    
    

    //select one random word from the list
    let randomWord = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    console.log(randomWord)
    let randomWordSplit = randomWord.split("");
    
    
    //create a new div for each letter, 
    for (i = 0; i<randomWord.length; i++) {
        $wordOnBoard = $('<div>').addClass('letterOnBoard').text(randomWordSplit[i])
        $('#guessLetters').append($wordOnBoard)
    
    }

});