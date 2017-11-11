window.onload = function () {

    // set variables     
    let wins = 0;
    let losses = 0;
    let maxTurn = 10;
    //this is the input displayed by user "" is used to denote that nothing is there yet
    let currentTurn = "";

    let randomLetter = getRandomLetter();  //call function to randomize letter
    inputLetter(); //call function that inputsLetters 

    //insert the values within the html using .innerHTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = maxTurn;
    document.getElementById("guessesInput").innerHTML = currentTurn;


function inputLetter() {

        document.addEventListener("keydown", function (e) {
            var input = String.fromCharCode(e.keyCode);//event is triggered with key stroke-- if else statements should go in here. 


            //with every keystroke (as shown above) maxTurn (of 10) will go down. Should be one of the first things in this code
            maxTurn--;

            currentTurn = currentTurn + " " + input.toLowerCase();

            //if statement goes here if it's a match
            //If user's input matches computer's number, increase wins, reset turns, generate another random letter, guesses reset
            if (input.toLowerCase() === randomLetter) {
                wins++;
                maxTurn = 10;
                randomLetter = getRandomLetter();
                currentTurn = "";
                //console.log(randomLetter);  use this to show the random letter in the console
            }

            //else (or else if?) statement goes here if not a match; starts if you run out of turns, increase losses++, reset the turns, 
            // call function getRandomLetter for new letter to guess
            else if (maxTurn === 0) {
                losses++;
                maxTurn = 10;
                randomLetter = getRandomLetter();
                currentTurn = "";

            }

            //value counter to add to html document.... wins, losses, maxTurn and currentTurn     
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("losses").innerHTML = losses;
            document.getElementById("guessesLeft").innerHTML = maxTurn;
            document.getElementById("guessesInput").innerHTML = currentTurn;

        });
    }


};

function getRandomLetter() {
    var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
    return possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
}//set the string possibleLetters abc...etc 
// then using the return function, randomize the choice using charAt and math.random. 
//possibleLetters is a string. Then it picks a character at random character from the string.



