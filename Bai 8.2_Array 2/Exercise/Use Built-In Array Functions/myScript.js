// Print Array
function PrintArray() {
    let myColor = ["Red", "Green", "White", "Black"];
    document.write(myColor.toString())
    document.write("<br>")
    document.write(myColor.join())
    document.write("<br>")
    document.write(myColor.join("+"))
}

// Print Even Array
function Print_Array_Even() {
    let array = [];
    let x = 0;
    let check = true
    let text = '';
    do {
        let inputNum = prompt('Nhap gia tri vao mang', '');
        if (inputNum === null || inputNum == "" ){
            break;
        }
        if (inputNum % 2 == 0){
            array[x] = "-" + inputNum;
        } else {
            array[x] = inputNum;
        }
        text+=array[x];
        x++
    } while (check)
    alert(text);
}

// UPPER lower Array
function Print_Upper_Lower_Array() {
    let text = '';
    let char = '';
    let result = '';
    let i = 0;
        let inputNum = prompt('Nhap gia tri vao mang', '');
        text+=inputNum
        while (i < text.length){
            char = text.charAt(i);
            if (char == char.toUpperCase()) {
                char = char.toLowerCase();
            } else if (char == char.toLowerCase()){
                char = char.toUpperCase();
            }
            i++
            result+=char;
            console.log(result)
        }
        window.alert(result);
}

