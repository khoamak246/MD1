// Display
let BOARD = document.getElementById('board');
let boardRow = [];
let display = "";

for (let i = 0; i < 3; i++) {
    boardRow[i] = new Array("(.)", "(.)", "(.)");
}
for (let j = 0; j < 3; j++) {
    display += "<br/>"
    for (let i = 0; i <= 2; i++) {
        display += boardRow[i][j] + i + j + "&nbsp;&nbsp;";
    }
}
BOARD.innerHTML = display;

//Play - Player 1
const result1 = [];
let count_P1 = 0;
let displayWin_Lose_Player1 = false;

function Player1() {
    // Input
    let x1 = prompt('Nhap x:');
    let y1 = prompt('Nhap y:');

    // Get array item
    if (x1 !== "" && y1 !== "" && x1 !== null && y1 !== null) {
        if (parseInt(x1) >= 0 && parseInt(x1) < 3 && parseInt(y1) >= 0 && parseInt(y1) < 3) {
            const player1 = {positionX: "", positionY: ""};
            player1.positionX = x1;
            player1.positionY = y1;
            result1[count_P1] = player1;
            count_P1++
        } else {
            window.alert('Nhap so be hon 3')
        }

        // Display after input
        let data1 = '';
        boardRow[x1][y1] = "X";
        for (let j = 0; j < 3; j++) {
            data1 += "<br/>"
            for (let i = 0; i <= 2; i++) {
                data1 += boardRow[i][j] + i + j + "&nbsp;&nbsp;";
            }
            BOARD.innerHTML = data1;

            // Button disable change
            document.getElementById("btnP2").disabled = false;
            document.getElementById("btnP1").disabled = true;
            document.getElementById('resBtn').disabled = false;
            document.getElementById('resBtn').style.display = "block";
        }
    }

    // Check condition
    if (result1.length > 2) {
        console.log(result1);
        win1();
        lose();
    }
}

//Play - Player 2

const result2 = [];
let count_P2 = 0;
let displayWin_Lose_Player2 = false;

function Player2() {
    // Input
    let x2 = prompt('Nhap x:');
    let y2 = prompt('Nhap y:');

    // Get array item
    if (x2 !== "" && y2 !== "" && x2 !== null && y2 !== null) {
        if (parseInt(x2) >= 0 && parseInt(x2) < 3 && parseInt(y2) >= 0 && parseInt(y2) < 3) {
            const player2 = {positionX: "", positionY: ""};
            player2.positionX = x2;
            player2.positionY = y2;
            result2[count_P2] = player2;
            count_P2++
        } else {
            window.alert('Nhap so be hon 3')
        }

        // Display after input
        let data2 = '';
        boardRow[x2][y2] = "O";
        for (let j = 0; j < 3; j++) {
            data2 += "<br/>"
            for (let i = 0; i <= 2; i++) {
                data2 += boardRow[i][j] + i + j + "&nbsp;&nbsp;";
            }
            BOARD.innerHTML = data2;

            // Button disable change
            document.getElementById("btnP2").disabled = true;
            document.getElementById("btnP1").disabled = false;
        }
    }

    // Check condition
    if (result2.length > 2) {
        console.log(result1);
        win2();
        lose();
    }
}


// Condition Win player 1 Function
function win1() {
    for (let i = 0; i < result1.length; i++) {
        let checkResult = 1;
        let checkresult2 = 1;
        for (let j = i; j < result1.length; j++) {
            if (i !== j) {

                // Win Condition
                let winCondition1 = result1[i].positionX === result1[j].positionX;
                let winCondition2 = result1[i].positionY === result1[j].positionY;

                if (winCondition1 || winCondition2) {
                    checkResult++
                    if (checkResult === 3) {
                        displayWin_Lose_Player1 = true;
                    }
                } else if (result1[i].positionX + result1[j].positionX === result1[i].positionY + result1[j].positionY) {
                    checkresult2++
                    if (checkresult2 === 3) {
                        displayWin_Lose_Player1 = true;
                        console.log(checkresult2);
                    }
                }
            }
        }
    }
}

// Win player 2 Function
function win2() {
    for (let i = 0; i < result2.length; i++) {
        let checkResult = 1;
        let checkresult2 = 1;
        for (let j = i; j < result2.length; j++) {
            if (i !== j) {

                // Win Condition
                let winCondition1 = result2[i].positionX === result2[j].positionX;
                let winCondition2 = result2[i].positionY === result2[j].positionY;

                if (winCondition1 || winCondition2) {
                    checkResult++
                    if (checkResult === 3) {
                        displayWin_Lose_Player2 = true;
                    }
                } else if (result2[i].positionX + result2[j].positionX === result2[i].positionY + result2[j].positionY) {
                    checkresult2++
                    if (checkresult2 === 3) {
                        displayWin_Lose_Player2 = true;
                        console.log(checkresult2);
                    }
                }
            }
        }
    }
}

// Condition Lose Function
function lose() {
    if (displayWin_Lose_Player1) {
        displayWin_Lose_Player2 = false;
        window.alert("Player 1 Win!")
        window.alert("Player 2 Lose")
    } else if (!displayWin_Lose_Player1) {
        displayWin_Lose_Player2 = true;
        window.alert("Player 1 lose!")
        window.alert("Player 2 Win")
    }
    if (displayWin_Lose_Player1 || !displayWin_Lose_Player1) {
        document.getElementById("btnP2").disabled = true;
        document.getElementById("btnP1").disabled = true;
    }
}

function reset() {
    window.location.reload();
}
