// Display
let b = document.getElementById("carogame");
let board = [];
let data = "";

for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0);
}
console.log(board)

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
b.innerHTML = data;


// // Function
function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML = "<hr/>" + data;
}
