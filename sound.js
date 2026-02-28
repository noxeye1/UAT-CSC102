// Define a global variable to store the audio object
var audWave;

// Function to set up the sound object and update button visibility
function addSound() {
    // choosing button functions
    let btnPlay = document.getElementById("btnPlaySound");
    let btnPause = document.getElementById("btnPauseSound");
    let btnAddSound = document.getElementById("btnAddSound");

    // sourcing the audio file
    audWave = new Audio("bells-tibetan-daniel_simon.mp3");
    
    // Set the audio ID
    audWave.id = "audWave";
    
    // Show the Play button
    btnPlay.hidden = false;
    
    // Show the Pause button
    btnPause.hidden = false;
    
    // hide the 'Add' button so it cannot be clicked twice
    btnAddSound.hidden = true;
    
    // Alert the user that the process was successful
    alert("Audio Locked and Loaded!");
}

// play 
function PlaySound() {
    audWave.play();
}

// function to pause the audio 
function PauseSound() {
    // pause button
    audWave.pause();
}

// click button
document.getElementById("btnAddSound").onclick = addSound;

//Play buttons click event
document.getElementById("btnPlaySound").onclick = PlaySound;

// Pause button's click event
document.getElementById("btnPauseSound").onclick = PauseSound;