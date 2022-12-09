// Display
let BOARD = document.getElementById('board');
let boardRow = [];
let display = "";

for (let i = 0; i <= 2; i++) {
    boardRow[i] = new Array("(.)", "(.)", "(.)");
    console.log(boardRow)
}
for (let j = 0; j < 3; j++) {
    display += "<br/>"
    for (let i = 0; i <= 2; i++) {
        display += boardRow[i][j] + "&nbsp;&nbsp;";
    }
}
BOARD.innerHTML = display;

//Play
function Play() {

}