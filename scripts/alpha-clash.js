// function play(){
//     // step 1 --> hide the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step 2 --> show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    // step 1 --> generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet',alphabet);

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