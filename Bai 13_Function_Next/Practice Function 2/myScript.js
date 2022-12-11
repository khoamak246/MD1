//Exercise 1 - Calculate Squared Input Number
function exercise1() {
    let GetInputNum = parseFloat(prompt('Nhap so cua ban: ',''));
    let Result = calculate_squared(GetInputNum);
    window.alert("Ket qua cua ban la: " + Result);
}
function calculate_squared(num) {
    return Math.pow(num, 2);
}

//Exercise 2 - Calculate Area and Perimeter of a Circle
function calculate_area_(r) {
    return Math.pow(r, 2) * Math.PI;
}
function calculate_perimeter(r) {
    return 2 * r * Math.PI;
}
function exercise2() {
    let GetRadius = parseFloat(prompt('Nhap ban kinh',''));
    let area = calculate_area_(GetRadius);
    let perimeter = calculate_perimeter(GetRadius);
    window.alert("Dien tich hinh tron la: " + area.toFixed(2) + "cm2");
    window.alert("Chu vi hinh tron la: " + perimeter.toFixed(2) + "cm2");
}

//Exercise 3 - Calculate Factorial Input Number
function calculate_factorial(num) {
    let Factorial = 1;
    for (let i = 1; i <= num; i++) {
        Factorial = Factorial * i;
    }
    return Factorial;
}
function exercise3() {
    let GetInputNum = parseInt(prompt('Nhap so cua ban:',''));
    let Result = calculate_factorial(GetInputNum);
    window.alert("Ket qua giai thua so ban vua nhap la " + Result);
}

//Exercise 4 - Check If a Number or Not
function check_number_notNumber(num) {
    if (isNaN(num)){
        return "False";
    } else {
        return "True";
    }
}
function exercise4() {
    let GetInputNum = prompt('Nhap so cua ban: ','');
    let Result = check_number_notNumber(GetInputNum);
    window.alert(Result);
}

//Exercise 5 - Find the Minimum Value in Three Number
function find_minimum(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
function exercise5() {
    let GetInputNum1 = parseFloat(prompt('Nhap so cu ban:',''));
    let GetInputNum2 = parseFloat(prompt('Nhap so cu ban:',''));
    let GetInputNum3 = parseFloat(prompt('Nhap so cu ban:',''));
    let Result = find_minimum(GetInputNum1, GetInputNum2, GetInputNum3);
    window.alert("So be nhat la: " + Result);
}

//Exercise 6 - Check for Positive Integers
function check_positive_integers(num) {
    if (num < 0){
        return "false";
    } else if (num > 0){
        return "true";
    } else {
        return 0;
    }
}
function exercise6() {
    let GetInputNum = parseInt(prompt("Nhap so cua ban:",''));
    let Result = check_positive_integers(GetInputNum);
    window.alert("Ket qua la: " + Result);
}

//Exercise 7 - Swap Two Number
function swap_twoNumber(num1, num2) {
    return num2 + " " + num1;
}
function exercise7() {
    let GetInputNum1 = parseFloat(prompt('Nhap so dau tien:',''));
    let GetInputNum2 = parseFloat(prompt("Nhap so thu hai:", ''));
    let Result = swap_twoNumber(GetInputNum1, GetInputNum2);
    window.alert("Thu tu so sau khi chuyen doi la: " + Result);
}

//Exercise 8 - Declare a Number Array and Reverse
function reverse_array(array) {
    return array.reverse();
}
let InputArray = [];
function exercise8() {
    let GetInputArrayLength = parseInt(prompt("Nhap so luong phan tu:" ,''));
    for (let i = 0; i < GetInputArrayLength; i++) {
        InputArray[i] = parseInt(prompt("Nhap so gia tri phan tu:" ,''));
    }
    let Result = reverse_array(InputArray);
    window.alert("Mang sau khi dao nguoc la: " + Result)
}

//Exercise 9 - Check If Character in String or Not
function check_character_in_orNot(inputString, character) {
    let Count = 0;
    let length = inputString.length;
    if (inputString.includes(character)){
        for (let i = 0; i < length; i++) {
            if (inputString[i] === character){
                Count++;
            }
        }
        return Count;
    } else {
        return "Khong co ky tu nay trong chuoi vua nhap"
    }
}
function exercise9() {
    let GetInputString = prompt('Nhap chuoi ky tu cua ban: ', '');
    let GetInputCharacter = prompt('Nhap ky tu muon kiem tra: ', '');
    let Result = check_character_in_orNot(GetInputString, GetInputCharacter);
    window.alert(Result);
}
