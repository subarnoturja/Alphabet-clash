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
    // console.log(currentAlphabetElement.innerText);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
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