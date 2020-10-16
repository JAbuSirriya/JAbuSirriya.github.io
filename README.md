# Snowman Project

## Progression through the project
First, I created a wireframe of the most essential parts of the game. This included a display of the letters, snowman image, reset game, and empty boxes where the correct letters would be filled. 

In the HTML I created the basic skeleton for the webpage, such as the buttons with the letters on them. Then in my JavaScript file, I created all of the global variables such as 'listofWords', 'randomWord', 'correctGuesses' and 'incorrectGuesses' because I knew these variables would be in multiple functions. 

I knew that I wanted to create the largest functions early on. For this reason, I created the 'generateWord' fuction, 'reset' function, and click function that deciphers between if the user chose the correct and incorrect letter. 

### First Roadblock
My first roadblock was that I should not have created the high-level functions first. By creating them first, I found myself pausing to go create helper functions for the main fuctions. Rather I should have created all of the lower-lever (helper) functions first, and then gone back and created the higher-level functions. 

Lastly, I created the win and lose functions. For these functions, I created a correctLetters array and an incorrectLetters array. If the length of the correctLetters array was equal to the randomWord selected, then the user won. If the incorrectLetters array was greater than 7 then the player lost. 

### Second Roadblock 
After completing most of the JS, I began the CSS. I created eight images of a snowman falling apart on Canva. I then imported these images, and I needed the snowman to fall apart as the user guessed incorrect letters. I had trouble figuring out a way for the images to match each incorrect guess. Instead of writing numerous lines of code in JS, I  changed the name of the images to 0.png, 1.png, etc. This allowed me to start the snowman at Image/0.png and progess to Image/1.png when the user guessed incorrectly. I structed the code as "Image/" + incorrectGuess + ".png". Lastly, I added three modals in JS: a game instructions modal, winner modal, and loser modal. 

### CSS/Animations/Audio
Using CSS to restructure the location of images and divs took much longer than I anticipated. I had not structured my HTML layout well, and for this reason, I rearranged a number of divs  in HTML so that I could better utilize the elements in CSS. Lastly, I added Christmas music to the close button of the game instructions, and thank you to Thomas Wilkerling --who had created snowflakes with HTML5 Canvas --I was able to add them into my webpage. 

### If more time permitted
Firstly, I would add categories or levels to the game. With each level, the complexity and length of the word would increase. Secondly, I would give a clue with each word, so that the user is more likely of guessing the correct word, and this would make the overall game more enjoyable. Thirdly, I would have generated my words through a random word API. 


## In conclusion
I learned so much from creating this project. I realized my strengths and the areas I need to improve. I hope you enjoy Snowman as much as I did making it. 


