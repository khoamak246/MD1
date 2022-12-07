// Tinh tuoi
function tinhTuoi() {
    let TUOI = parseInt(document.getElementById('tuoi').value)
    let TUOI_ANH = TUOI + 3;
    let TUOI_BO = TUOI_ANH * 6;
    document.getElementById('result').innerHTML = "Tuổi anh là: " + TUOI_ANH + " Tuổi bố là: " + TUOI_BO;
}



// Check tam giac vuong
function Check_Tam_Giac() {
    // Lay gia tri 3 canh
    let CANH1 = parseInt(document.getElementById('canh1').value);
    let CANH2 = parseInt(document.getElementById('canh2').value);
    let CANH3 = parseInt(document.getElementById('canh3').value);

    // Xet tam giac
    if (CANH1> 0 && CANH2 > 0 && CANH3 > 0 && CANH1 + CANH2 > CANH3 && CANH1 + CANH3 > CANH2 && CANH2 + CANH3 > CANH1){
        let x = Math.pow(CANH1, 2);
        let y = Math.pow(CANH2, 2);
        let z = Math.pow(CANH3, 2);

        // Xet tam giac vuong
        if (x + y == z || x + z == y || y + z == x){
            window.alert('Đây là tam giác vuông')
        } else {
            window.alert('Đây không phải là tam giác vuông')
        }
    } else {
        window.alert('Đây không phải là tam giác vuông')
    }
}

// Kiem tra tuoi
function Check_Gtuoi() {
    // Lay gia tri tuoi
    let TUOI = parseInt(document.getElementById('Gtuoi').value);
    let CAN = TUOI % 10;
    let CHI = TUOI % 12;
    // List can chi
    let NamCan = ['Canh', 'Thân','Nhâm','Qúy','Giáp','Ất','Bính','Đinh','Mậu','Kỷ'];
    let NamChi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn','Tỵ','Ngọ'];
    // Print result
    document.getElementById('result1').innerHTML = "Năm âm của bạn là: " + NamCan[CAN] + " " + NamChi[CHI];
}