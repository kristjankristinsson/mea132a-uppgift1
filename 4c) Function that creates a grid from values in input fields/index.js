"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:


First:
gridMaker must be called each time the user clicks on the button (See index.html).


Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/

function gridMaker (gridContainer, R, C) {
    
    
    gridContainer.style.display = "grid";
    gridContainer.style.height = "50vh";
    gridContainer.style.width = "50vh";

    
    gridContainer.style.gridTemplateRows = R + "fr";
    gridContainer.style.gridTemplateColumns = C + "fr";
}   

document.querySelector("button").addEventListener("click", function () {
 let grid = document.getElementById("grid");
 let rows = document.getElementById("inputRows").value;
 let columns = document.getElementById("inputCols").value;

gridMaker( grid, rows, columns);

});