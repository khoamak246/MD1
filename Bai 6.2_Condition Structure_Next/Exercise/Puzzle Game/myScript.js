var rows = 3;
var columns = 3;

var currTile; //Current Tile
var otherTile; //Black Tile

var turns = 0;

var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function () {
    // Assign id for each Tile
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            // Each <img id="r-c" src="...jpg">
            // <img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "../../Exercise/Puzzle%20Game/Img/" + imgOrder.shift() + ".jpg";

            // Add Drag Functionality
            tile.addEventListener("dragstart", dragStart);// Click img
            tile.addEventListener("dragover", dragOver);   // Moving around
            tile.addEventListener("dragenter", dragEnter); // Dragging onto another tile
            tile.addEventListener("dragleave", dragLeave); // Dragged leaving another tile
            tile.addEventListener("drop", dragDrop);       // Drop over another tile
            tile.addEventListener("dragend", dragEnd);     // After drop, swap the two tile

            // Add img to board
            document.getElementById("board").append(tile);
        }
    }
}

// Start
function dragStart() {
    currTile = this; // Refers the tile being drag
}

// Overround
function dragOver(evt) {
    evt.preventDefault();
}

// Enter
function dragEnter(evt) {
    evt.preventDefault();
}

// Leave
function dragLeave() {
    
}

// Drop
function dragDrop() {
    otherTile = this;
}

// End
function dragEnd() {
    if (!otherTile.src.includes("3.jpg")){
        return;
    }
    // Split Dragging Tile and Dragging onto Tile Coords
    let currCoords = currTile.id.split("-"); //[0-0] -> ["0","0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    // Set Coords each tile when moving
    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;
    let moveUp = r2 == r-1 && c2 == c2;
    let moveDown = r2 == r+1 && c == c2

    let isisAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isisAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById('turns').innerHTML = turns;
    }


}



