/* Marcos Ammerman 2/16/26 */


function handleForm(event) {
   
    event.preventDefault();

   
    let display = document.getElementById('result');
    let input = document.getElementById('user_string').value;
    let cleanText = input.toLowerCase().replace(/\s+/g, '');
    
    let reversedText = "";

    //  loop to reverse the string
    for (let i = cleanText.length - 1; i >= 0; i--) {
       
        reversedText += cleanText[i];
    }
    if (cleanText === reversedText) {
        // Update the span with a success message
        display.innerHTML = " Success! '" + input + "' is a palindrome.";
        display.style.color = "green";
    } else {
        // Update the span with a failure message
        display.innerHTML = "Sorry,'" + input + "' is not a palindrome.";
        display.style.color = "red";
    }

    
    let repeat = confirm("Would you like to check another word?");

    if (repeat) {
        
        document.getElementById('user_string').value = "";
    } else {
        
        document.body.innerHTML = "<h1 style='color:white; text-align:center;'>Application Exited.</h1>";
    }

    // Return false to prevent refresh
    return false;
}