// Count to 100
function count_To_100() {
    for (var i = 1; i < 100; i++) {
        window.alert(i);
        if (i == 99){
            window.alert("Da hoan thanh")
        }
    }
}

// Check nhiet do
function Check_Nhiet_Do() {
    let NHIETDO = parseInt(prompt('Nhap nhiet do: ',''))
    if (NHIETDO > 100){
        window.alert('Hay giam nhiet do')
    } else if (NHIETDO < 20){
        window.alert("Hay tang nhie do")
    } else{
        window.alert('Nhiet do binh thuong')
    }
}

// 20 Fibonacci
function Fibonacci20() {
    let x = ''
    let n1 = 0, n2 =  1, nextNum;
    for (let i = 1; i <= 20; i++) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        x += n1 + " ";
    }
    document.getElementById('result').innerHTML = x ;
}

// Fibonacci % 5
function Fibonacci_chia5() {
    let n1 =0, n2 = 1, nextNum;
    while (n1 >= 0){
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        if (n1 % 5 === 0){
            window.alert("So dau tien chia het cho 5 cua day Fibonacci la: " + n1);
            break;
        }
    }
}

// Tong 20 so Fibonacci
function SumFibonacci() {
    let n1 = 0, n2 = 1, nextNum;
    SUM = 0;
    for (let i = 0; i < 20 ; i++) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        SUM = SUM + n1;
    }
    window.alert("Tong 20 so dau cua day Fibobnacci la: " + SUM);
}

// SUM 30 so dau chia het 7
function Sum30_chia7() {
    count = 0;
    n1 = 0;
    let SUM = 0;
    while (count <= 30){
        n1++
        if (n1 % 7 === 0){
            SUM = SUM + n1;
            count++
        }
    } window.alert(SUM);
}

// Fizz Buzz
function Fizz_Buzz() {
    let insert = '';
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            insert += " Fizz "
        } else if (i % 5 == 0){
            insert += " Buzz "
        } else if (i % 3 == 0 && i % 5 == 0){
            insert += " FizzBuzz "
        } else {
            insert += " " + i + " ";
        }
    }
    document.getElementById('result2').innerHTML = insert;
}

// Math Random
function Math_Random() {

    let RDM = Math.floor(Math.random()*10);
    let check = true
    do{
        let inputNum = parseInt(prompt('Nhap so tu 1 - 10',''))
        if (inputNum < 0 || inputNum > 10) {
            window.alert("Alo! Alo! Input from 1 to 10 pls!!!")
            document.getElementById('random').value = '';
        }
        if (inputNum == RDM){
            alert("doan dung roi ne")
            check=false;
        }else {
            alert("chua chinh xac vui long nhap lai")
        }
    }while(check)
}




