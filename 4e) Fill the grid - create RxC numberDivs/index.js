"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/


gridMaker(
 document.getElementById("grid"),6,6);

 function createNumberDiv () {
         
        let numbDiv = document.createElement("div");
        numbDiv.innerHTML = randomNumber(100);

        return numbDiv;
 }

 function gridMaker (gridContaioner, R, C) {

 gridContaioner.style.gridTemplateRows = R + "fr";
 gridContaioner.style.gridTemplateRows = C + "fr";

 let total = R *C;
 for (let i = 0; i < total; i++) {
         gridContaioner.append( createNumberDiv() );
 }

}
function randomNumber (max) {
 return Math.floor(max * Math.random());
} 
