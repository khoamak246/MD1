// Exercise 1 - Compare with 10
function Exercise1() {
    let count = 0;
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 20);
        if (array[i] > 10){
            document.write(array[i] + " ");
            count++;
        }
    }
    document.write("<br>" + "So phan tu trong mang lon hon 10 la: " + count);
}

// Exercise 2 - Find Biggest Value
function Exercise2() {
    let array = [];
    let max = 0;
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 20);
    }
    console.log(array);
    for (let j = 0; j < array.length; j++) {
        if (array[j] > max){
            max = array[j];
            console.log(max);
        }
    }
    alert( "Gia tri lon nhat trong mang la: " + max + " Vi tri cua no la: " + array.indexOf(max));
}

//Exercise 3 - Average and Biggest Value
function Exercise3() {
    let array = [];
    let average;
    let total = 0;
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 20);
    }
    for (let j = 0; j < array.length; j++) {
        total = total + array[j];
    }
    average = total / array.length;
    alert("Gia tri lon nhat trong mang la: " + Math.max(...array) + " Gia tri trung binh trong mang la: " + average);
    console.log(array);
}

//Exercise 4 - Input Array Value and Reverse
function Exercise4() {
    let array = [];
    let numValue = parseInt(prompt('Nhap so luong phan tu: ',''));
    for (let i = numValue - 1 ; i >= 0; i--) {
        array[i] = parseFloat(prompt('Nhap gia tri cua mang: ', ''));
    }
    console.log(array);
    alert(array)
}

// Exercise 5 - Count Negative Integer
function Exercise5() {
    let array = [];
    let count = 0;
        for (let i = 0; i < 10; i++) {
            array[i] = Math.floor(Math.random() * 20);
        }
    for (let j = 0; j < array.length; j++) {
        let x = Math.floor(Math.random() * 10)
        array[x] = array[x] * -1;
    }
    for (let z = 0; z < array.length; z++) {
        if (array[z] < 0){
            count++
        }
    }
    window.alert('So phan tu be hon 0 trong mang la: ' + count);
}

// Exercise 6 - Check V if it had in array
function Exercise6() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 20);
    }
    let input = parseInt(prompt('Nhap so muon doan ', '0'));
    let check = array.includes(input);
    if (check){
        window.alert("V is in the array");
    } else {
        window.alert("V is not in the array");
    }
}

//Exercise 7 - Input Array Value And Check Value V
function Exercise7() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = parseInt(prompt('Nhap phan tu va mang: ',''));
    }
    let V = parseInt(prompt('Nhap so: ', ''));
    let check = array.indexOf(V);
    console.log(check);
    if (check !== -1) {
        array.splice(check, 1);
        array.push(0);
        window.alert(array)
    } else {
        window.alert("V is not in the array");
    }
}

//Exercise 8 - Array Reverse
function Exercise8() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random()*10);
    }
    array.sort(function (a , b){return b - a});
    window.alert(array);
}

//Exercise 9 - Concat Array
function Exercise9() {
    let arraya = [];
    let arrayb = [];
    let arrayc = [];
    for (let i = 0; i < 10; i++) {
        arraya[i] = Math.floor(Math.random()*10);
    }
    for (let j = 0; j < 10; j++) {
        arrayb[j] = Math.floor(Math.random()*10);
    }
    for (let z = 0; z < 20; z++) {
        arrayc[z] = Math.floor(Math.random()*10);
    }
    let ArrayC = arrayc.concat(arraya, arrayb);
    window.alert(ArrayC);
}