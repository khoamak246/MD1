// Change C to F
function Change_C_to_F() {
    let DOC = parseInt(document.getElementById('doC').value)
    if (DOC > 0) {
        let DOF = DOC * 9 / 5 + 32;
        window.alert('Do F la: ' + DOF + " do");
    } else {
        window.alert('Some thing wrong here!!')
    }
}

// Chang m to feet
function Change_M_to_F() {
    let SO_M = parseInt(document.getElementById('So_m').value)
    if (SO_M > 0) {
        let SO_F = SO_M * 3.2808;
        window.alert('So feet la: ' + SO_F + ' feet');
    } else {
        window.alert('Some thing wrong here!!')
    }
}

// Find S of Square
function S_Square() {
    let SOA = parseInt(document.getElementById('nhapa').value)
    if (SOA > 0) {
        let s = SOA * SOA;
        window.alert('Dien tich la: ' + s + ' cm2');
    } else {
        window.alert('Some thing wrong here!!')
    }
}

// Dien tich chu nhat
function Schunhat() {
    let CHIEUDAI = parseInt(document.getElementById('chieudai').value);
    let CHIEURONG = parseInt(document.getElementById('chieurong').value);
    if (CHIEUDAI>0 && CHIEURONG>0){
        let SCHUNHAT = CHIEURONG * CHIEUDAI;
        window.alert('Dien tich hinh chu nhat la: ' + SCHUNHAT + " cm2")
    } else {
        window.alert('Some thing wrong here!!')
    }
}

// Dien tich tam giac

function Stamgiac() {
    let CANHA = parseInt(document.getElementById('canha').value);
    let CANHB = parseInt(document.getElementById('canhb').value);
    if (CANHA>0 && CANHB>0){
        let DAY = Math.sqrt(Math.pow(CANHA,2) + Math.pow(CANHB, 2));
        let STAMGIAC = 1/2 * DAY * DAY /2
        window.alert('Dien tich hinh chu nhat la: ' + STAMGIAC + " cm2")
    } else {
        window.alert('Some thing wrong here!!')
    }
}

// Giai pt bac 1
function GiaiPT1() {
    let sOa = parseInt(document.getElementById('Nhapso_a').value);
    let sOb = parseInt(document.getElementById('Nhapso_b').value);
    if (sOa == 0 && sOb ==0){
        window.alert('Phuong trinh vo so nghiem')
    } else if (sOa==0 && sOb !== 0){
        window.alert('Phuong trinh vo nghiem')
    } else {
        let x = (-sOb) / sOa
        window.alert("Nghiem cua phuong trinh "+ x);
    }
}

// Phuong trinh bac 2
function GiaiPT2() {
    let A = parseInt(document.getElementById('Nhapsoa').value);
    let B = parseInt(document.getElementById('Nhapsob').value);
    let C = parseInt(document.getElementById('Nhapsoc').value);
    let Delta = Math.pow(B, 2) - (4 * A * C);
    if (Delta < 0) {
        window.alert('Phuong trinh vo nghiem');
    } else if (Delta == 0) {
        let N_1 = -B / (2*A*C);
        let N1 = N_1.toFixed(2);
        console.log(N1);
        window.alert('Phuong trinh co mot nghiem ' + N1);
        } else if (Delta > 0) {
                let N_1 = (-B) + (Math.sqrt(Delta)/(2*A));
                let N1 = N_1.toFixed(2)
                let N_2 = (-B) - (Math.sqrt(Delta)/(2*A))
                let N2 = N_2.toFixed(2)
            window.alert('Nghiem 1: ' + N1 + " Nghiem 2: " + N2);
        }
}

// Check tuoi Human
function checkTuoi() {
    let TUOI = parseInt(document.getElementById('Nhaptuoi').value);
    if (TUOI > 0 && TUOI < 120){
        window.alert('Tuoi cua ban la: ' + TUOI)
    } else{
        window.alert('Some thing wrong here!!!')
    }
}

// Kiem tra tam giac

function Kiemtra() {
    let CANH1 = parseInt(document.getElementById('canh1').value);
    let CANH2 = parseInt(document.getElementById('canh2').value);
    let CANH3 = parseInt(document.getElementById('canh3').value);
    if (CANH1 > 0 && CANH2 > 0 && CANH3 > 0 && CANH1 + CANH2 > CANH3 && CANH1 + CANH3 > CANH2 && CANH3 + CANH2 > CANH1){
        window.alert('Day la hinh tam giac');
    } else {
        window.alert('Day khong phai la hinh tam giac')
    }
}

//  Tinh tien dien

function CaculateDien() {
    let THANHTIEN;
    let SODIEN = parseInt(document.getElementById('Sodien').value);
    if (SODIEN >= 0 && SODIEN <= 50) {
        THANHTIEN = SODIEN * 1.678;
    }else if (SODIEN >= 51 && SODIEN <= 100){
        THANHTIEN = SODIEN * 1.734;
    } else if (SODIEN >= 101 && SODIEN <= 200){
        THANHTIEN = SODIEN * 2.014;
    } else if (SODIEN >= 201 && SODIEN <= 300){
        THANHTIEN = SODIEN * 2.536;
    } else {
        THANHTIEN = "Ban that phi thuong, ban se dang xuat ve hanh tinh me!!!"
    }
    window.alert('Tien dien la: ' + THANHTIEN);
}

// Thue thu nhap ca nhan

function Thue() {
    let THANHTIEN;
    let THUNHAP = parseInt(document.getElementById('tongthu').value);
    if (THUNHAP >= Math.pow(10,7) && THUNHAP < 6 * Math.pow(10,7)){
        THANHTIEN = THUNHAP /100 * 5;
    } else if (THUNHAP >= 6 * Math.pow(10,7) && THUNHAP < 12 * Math.pow(10,7)) {
        THANHTIEN = THUNHAP/100 * 10;
    } else if (THUNHAP >= 12 * Math.pow(10,7) && THUNHAP < 216 * Math.pow(10,6)){
        THANHTIEN = THUNHAP/100 * 15;
    } else if (THUNHAP >= 216 * Math.pow(10,6) && THUNHAP < 384 * Math.pow(10,6)) {
        THANHTIEN = THUNHAP/100 * 20;
    } else if (THUNHAP >= 384 * Math.pow(10,6) && THUNHAP < 624 * Math.pow(10,6)) {
        THANHTIEN = THUNHAP / 100 * 25;
    } else if (THUNHAP >= 624 * Math.pow(10,6) && THUNHAP < 960 * Math.pow(10,6)) {
        THANHTIEN = THUNHAP/100 * 20;
    } else if (THUNHAP >= 960 * Math.pow(10,6)) {
        THANHTIEN = THUNHAP/100 * 35;
    }
    window.alert('Thue thu nhap ca nhan cua ban la:' + THANHTIEN + "dong")
}

// Lai suat ngan hang
function TinhLai() {
    let VON = parseInt(document.getElementById('von').value);
    let KIHAN = parseInt(document.getElementById('kihan').value);
    let LAISUAT = parseInt(document.getElementById('lai').value);
    let DAGUI = parseInt(document.getElementById('dagui').value);
    let Laisuat_Thang = LAISUAT / KIHAN/ 100;
        let THANHTIEN = (VON + VON*Laisuat_Thang)*Math.pow(Laisuat_Thang + 1,DAGUI-1)
        window.alert('So tien cu ban la:' + THANHTIEN)
}
