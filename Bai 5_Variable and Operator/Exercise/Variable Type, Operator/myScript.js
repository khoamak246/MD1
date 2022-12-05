// Average
function average() {
    let diemtoan = document.getElementById('toan').value;
    let diemly = document.getElementById('ly').value;
    let diemhoa = document.getElementById('hoa').value;
    let x = (parseInt(diemtoan) + parseInt(diemly) + parseInt(diemhoa))/3
    if (parseInt(diemtoan) > 10 || parseInt(diemly) > 10 || parseInt(diemhoa) > 10) {
        window.alert("Ban can nhap so be hon 10")
        document.getElementById('toan').value = 0;
        document.getElementById('ly').value = 0;
        document.getElementById('hoa').value = 0;
    } else {
        document.getElementById('result').innerHTML = '<br>Diem trung binh cua ban la: ' + x;
    }
}

//Part 2 _ Change  Celsius to Fahrenheit
function changeC() {
    let doC = document.getElementById('do-c').value;
    let doF = parseInt(doC)/5 * 9 + 32;
    document.getElementById('result2').innerHTML = "Do F la: " + doF;
}

//Part 3 + 4 _ Perimeter and Area Circle
function caculate() {
    let radius = document.getElementById('R').value;
    let p = parseInt(radius) * 2 * Math.PI;
    p = p.toFixed(2);
    let area = parseInt(radius) * parseInt(radius) * Math.PI;
    area = area.toFixed(2);
    document.getElementById('result3').innerHTML = "Chu vi hinh tron la: " + p + " Dien tich hinh tron la: " + area;
}