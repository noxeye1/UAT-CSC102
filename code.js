// Variable for the total
let totalScore = 0;
function Roll_the_Die(){
 //  1. Generate a random number 1-6
 let roll = 
 Math.floor(Math.random() * 6) + 1; 
 // 2. Update the total
 totalScore += roll;
 // 3. Find the HTML elements and update their text
 document.getElementById('total') .innerText = totalScore
}