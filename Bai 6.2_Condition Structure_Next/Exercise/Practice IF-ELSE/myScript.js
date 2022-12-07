// Check Mod
function CheckMod() {
    let SO_A = parseInt(document.getElementById('so-a').value);
    let SO_B = parseInt(document.getElementById('so-b').value);
    if (SO_A%SO_B == 0) {
        window.alert('So a chia het cho so b')
    } else  {
        window.alert('So a khong chia het cho so b')
    }
}

// Check Year Old
function YearOld() {
    let TUOI = parseInt(document.getElementById('tuoi').value);
    if (TUOI >= 16) {
        window.alert('Ban du tuoi vao lop 10')
    } else {
        window.alert('Ban chua du tuoi vao lop 10')
    }
}

// Check with 0
function check0() {
    let SO_SO_SANH = parseInt(document.getElementById('So_so_sanh').value);
    if (SO_SO_SANH > 0) {
        window.alert('So lon hon 0')
    } else {
        window.alert('So be hon 0')
    }
}

// Find the best value
function FindValue() {
    let a = parseInt(document.getElementById('nhapa').value);
    let b = parseInt(document.getElementById('nhapb').value);
    let c = parseInt(document.getElementById('nhapc').value);
    if (a > b && a > c){
        window.alert('So lon nha la:' + a);
    } else if (b > c){
        window.alert('So lon nha la:' + b);
    } else {
        window.alert('So lon nha la:' + c);
    }
}

// Check HSG
function checkHSG() {
    let DIEM15 = parseInt(document.getElementById('diem15').value);
    let DIEM45 = parseInt(document.getElementById('diem45').value);
    let DIEMEND = parseInt(document.getElementById('diemend').value);

    if ((10 >= DIEM15 && DIEM15>=0) && (10 >= DIEM45 && DIEM45>=0) && (10 >= DIEMEND && DIEMEND>=0))  {
        let DIEM_TONG_KET = (DIEM15 + DIEM45*2 + DIEMEND*2)/5;
        if (DIEM_TONG_KET >= 8) {
            window.alert('Chuc mung! Ban la hoc sinh gioi!')
        } else if (DIEM_TONG_KET >= 6.5) {
            window.alert("Xui ghe! Ban la hoc sinh kha!")
        } else if (DIEM_TONG_KET >= 0){
            window.alert('Oh No! Sap co nguoi bi ra duong ngu roi!')
        }
    } else {
        window.alert('EEE! Co nguoi run tay bam lon diem roi ne!! Leu Leu!!')
    }
}

//Check HH
function checkHH() {
    let HH = parseInt(document.getElementById('Nhaptien').value) /100 * 10;
    window.alert("So tien Hoa Hong la:" + HH)
}

// Check phone money

function checkPhone() {
    let PHONE_MONEY = parseInt(document.getElementById('time').value) / 10 * 200;
    window.alert('So tien cuoc goi cua ban la: ' + PHONE_MONEY + 'dong');
}
