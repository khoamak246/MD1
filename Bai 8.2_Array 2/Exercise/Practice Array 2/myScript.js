// Exercise 1 - Print Item In Array
// For i
function Exercise1() {
    let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (let i = 0; i < a.length; i++) {
        document.write("row " + i + "<br>")
        for (let j = 0; j <a[i].length; j++) {
            document.write(a[i][j] + "<br>");
        }
    }
}

//For in
function Exercise1_1() {
    let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (const i in a) {
        document.write("Row" + i + "<br>");
        for (const j in a[i]) {
            document.write("" + a[i][j] + "<br>");
        }
    }
}

//Exercise 2 - Reverse Array
function Exercise2() {
    let array = ['c', 's', 'c', '2', '6', '1' ];
    for (let i = array.length - 1 ; i >= 0; i--) {
        document.write(array[i]);
    }
}

//Exercise 3 - Array String Length
function Exercise3() {
    let array = [];
    let arrayLength = parseInt(prompt('Nhap so phan tu muon co: ',''));
    for (let i = 0; i < arrayLength; i++) {
        array[i] = prompt("Nhap gia tri vao mang: ",'');
    }
    let text = '';
    for (const i in array) {
        text = text + array[i];
    }
    window.alert("So ky tu trong chuoi la: " + text.length);
}

// Exercise 4 - Sting Length
function Exercise4() {
    let input = prompt('Nhap chuoi ban muon kiem tra vao day: ','');
    window.alert(input.length);
}

// Exercise 5 - Check Similarity Of Two String
function Exercise5() {
    let stringa = prompt('Nhap chuoi cua ban: ', '');
    let stringb = prompt('Nhap chuoi ban muon kiem tra', '');
    if (stringa.includes(stringb)){
        window.alert("Chuoi ban nhap giong nhau");
    } else {
        window.alert("Chuoi ban nhap khong giong nhau;");
    }
}

// Exercise 6 - Replace All "-" To "_"
function Exercise6() {
    let inputString = prompt('Nhap chuoi cua ban', '');
    let check = inputString.includes("-");
    if (check){
        let result = inputString.replaceAll("-", "_");
        window.alert("Chuoi cua ban sau khi chinh sua la:" + result);
    } else {
        window.alert("Chuoi cua ban khong co ky tu '-'");
    }
}