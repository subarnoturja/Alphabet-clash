// function play(){
//     // step 1 --> hide the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step 2 --> show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key; // event.key use krle ami ki press kortisi oita javascript capture kortese 

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);




// --------------------------------------------------------------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        

        // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);


// ---------------------------------------------------------------------------------------
        // step 1 --> get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        

        // // step 2 --> reduce the life count 
        // const newLife = currentLife - 1;

        // // step 3 --> display the how many life left
        // currentLifeElement.innerText = newLife;


    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step 1 --> generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly generated alphabet to the screen to show
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}