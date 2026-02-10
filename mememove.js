// Marcos Ammerman - 2/8/26
var changeInterval = 0;

// Function to start the meme movement
function startMoving() {
    // Look up the start button and disable it so it can't be clicked twice
    document.getElementById("startBtn").disabled = true;
    
    // Look up the stop button and enable it to stop the movement
    document.getElementById("stopBtn").disabled = false;

    // pull up image and image id
    var image = document.getElementById("uat_class_meme");

    // Set an interval to run every 100 milliseconds
    changeInterval = setInterval(function() {
        
        // Generate a random number for the 'Left' (horizontal) coordinate
        var x = Math.random() * 1000;
        
        // Generate a random number for the 'Top' (vertical) coordinate
        var y = Math.random() * 600;

        // Apply the new random coordinates to the image's style properties
        image.style.left = x + "px";
        image.style.top = y + "px";
         document.getElementById("msgDisplay").innerHTML = "Meme coordinates: X=" + Math.round(x) + " Y=" + Math.round(y);

    }, 100); 
}

// Function to stop the meme movement
function stopMoving() {
    // Re-enable the start button so the user can play again
    document.getElementById("startBtn").disabled = false;
    
    document.getElementById("stopBtn").disabled = true;

    // Use clearInterval with the ID we saved to stop the movement loop
    clearInterval(changeInterval);

    // message when stop button pressed
    document.getElementById("msgDisplay").innerHTML = "movement stopped";
}