let CaroBoard = '';
CaroBoard += "<table border='1' width='600px' height='600px' style='text-align: center; margin: auto'>"
for (let i = 1; i <= 20; i++) {
    CaroBoard += "<tr>"
    for (let j = 1; j <= 20; j++) {
        CaroBoard = CaroBoard + `<td id="${i}_${j}" onclick="TickX_O(${i}, ${j})" style="width: 20px; height: 20px"></td>`
    }
    CaroBoard += "</tr>"
}

CaroBoard += "</table>";
document.write(CaroBoard);

let count = 1;
let Player1_Result = [];
let Player2_Result = [];

function TickX_O(row, cell) {
    let DisplayX_Y = document.getElementById(`${row}_${cell}`);
    if (DisplayX_Y.innerHTML === "") {
        if (count % 2 !== 0) {
            DisplayX_Y.innerHTML = "X";
            Player1_Result.push([row, cell, "X"])
            count++
            // let check1 = checkWin_row(Player1_Result);
            // let check2 = checkWin_cell(Player1_Result);
            let check3 = checkWin_diagonal_forward(Player1_Result);
            // if (check1 || check2 || check3) {
            //     alert("P1 Win");
            // }
        } else {
            DisplayX_Y.innerHTML = "O";
            Player2_Result.push([row, cell, "O"])
            count++
            // let check1 = checkWin_row(Player2_Result);
            // let check2 = checkWin_cell(Player2_Result);
            let check3 = checkWin_diagonal_forward(Player2_Result);
            // if (check1 || check2 || check3) {
            //     alert("P2 Win");
            // }
        }
    }
}

function checkWin_row(array) {
    let check_win_row = 0;
    let hold = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i][0] > array[j][0]) {
                hold = array[i];
                array[i] = array[j];
                array[j] = hold
            } else if (array[i][0] === array[j][0]) {
                if (array[i][1] > array[j][1]) {
                    hold = array[i];
                    array[i] = array[j];
                    array[j] = hold;
                }
            }
        }
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i][0] === array[i + 1][0]) {
            if (array[i][1] + 1 === array[i + 1][1]) {
                check_win_row++
            }
        } else {
            if (check_win_row < 4) {
                check_win_row = 0;
            } else if (check_win_row >= 4) {
                return true;
            }
        }
    }
    if (check_win_row >= 4) {
        return true;
    } else {
        return false;
    }
}

function checkWin_cell(array) {
    let check_win_cell = 0;
    let hold = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i][1] > array[j][1]) {
                hold = array[i];
                array[i] = array[j];
                array[j] = hold
            } else if (array[i][1] === array[j][1]) {
                if (array[i][0] > array[j][0]) {
                    hold = array[i];
                    array[i] = array[j];
                    array[j] = hold;
                }
            }
        }
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i][1] === array[i + 1][1]) {
            if (array[i][0] + 1 === array[i + 1][0]) {
                check_win_cell++
            }
        } else {
            if (check_win_cell < 4) {
                check_win_cell = 0;
            } else if (check_win_cell >= 4) {
                return true;
            }
        }
    }
    if (check_win_cell >= 4) {
        return true;
    } else {
        return false;
    }
}

function checkWin_diagonal_forward(array) {
    let check_win_diagonal_forward = 0;
    let hold = 0;
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i][0] - 1 == array[j][0] && array[i][1] - 1 == array[j][1]) {
                    hold = array[i];
                    array[i] = array[j];
                    array[j] = hold;
                } else {
                    hold = array[i];
                    array[i] = array[j];
                    array[j] = hold;
                }
            }
    }

    console.log(array)
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i][0] + 1 === array[i + 1][0]) {
            if (array[i][1] + 1 === array[i + 1][1]) {
                check_win_diagonal_forward++
            }
        } else {
            if (check_win_diagonal_forward < 4) {
                check_win_diagonal_forward = 0;
            } else if (check_win_diagonal_forward >= 4) {
                return true;
            }
        }
    }
    if (check_win_diagonal_forward >= 4) {
        return true;
    } else {
        return false;
    }
}








