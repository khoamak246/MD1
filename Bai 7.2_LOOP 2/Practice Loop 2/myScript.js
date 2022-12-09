// Show Fibo
function showFibo() {
    let FIBO = parseInt(document.getElementById('fibo').value)
    let n1 = 0, n2 = 1, nextNum;
    let text = '';
    for (let i = 0; i < FIBO; i++) {
        text += "So " + n1 + " ";
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
    document.getElementById('result').innerHTML = text;
}

// Tinh giai thua
function caculate() {
    let x = 1;
    let NUM = parseInt(document.getElementById('num').value);
    for (let i = 1; i <= NUM; i++) {
        x = x * i;
    }
    window.alert(x);
}

// Ve tam giac vuong
function Tam_giac_1() {
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("*")
        }
        document.write("<br>")
    }
}

// Ve tam giac vuong 2
function Tam_giac_2() {
    for (let i = 5; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            document.write("*")
        }
        document.write("<br>")
    }
}

//Ve chu nhat
function HCN() {
    let count = 0;
    let row = true
    while (row) {
        for (let i = 1; i <= 13; i++) {
            if (count !== 0 && count !== 4) {
                if (i > 1 && i < 13) {
                    document.write("&nbsp;&nbsp")
                } else {
                    document.write("*")
                }
            } else {
                document.write('*')
            }
        }
        document.write("<br>")
        count++
        if (count === 5) {
            row = false;
        }
    }
}


// Lai ngan hang
function caculateLai() {
    let VON = parseInt(document.getElementById('NhapVon').value);
    let LAI = parseInt(document.getElementById('Laisuat').value);
    let THOIHAN = parseInt(document.getElementById('thoihan').value);
    let THOI_GIAN_GUI = parseInt(document.getElementById('thoigiangui').value);

    let TONGLAI = VON * (LAI / 100 / THOIHAN) * THOI_GIAN_GUI
    window.alert("Tong lai la: " + TONGLAI);
}

// ve trai tim
function drawHeart() {
    let n = 6;
    let space = 0;

    for (let r1 = 0; r1 < n / 3; r1++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp")
        for (let p1 = 1; p1 <= n / 3; p1++) {
            document.write("*")
        }
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp")
    }
    document.write("<br>")

    for (let r2 = 0; r2 < n / 3; r2++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
        for (let p2 = 1; p2 <= n / 2 + 1; p2++) {
            document.write("*")
        }
        document.write("&nbsp;&nbsp;&nbsp;&nbsp")
    }
    document.write("<br>")

    for (let r3 = 0; r3 < n / 3; r3++) {
        document.write("&nbsp;&nbsp")
        for (let p3 = 0; p3 <= n / 2 + 2; p3++) {
            document.write("*")
        }
        document.write("&nbsp;&nbsp")
    }
    document.write("<br>")

    for (let r4 = 0; r4 < n / 3; r4++) {
        document.write("&nbsp")
        for (let p4 = 0; p4 <= n / 2 + 3; p4++) {
            document.write("*")
        }
        document.write("&nbsp")
    }
    document.write("<br>")

    for (let r5 = 0; r5 < n / 3; r5++) {
        for (let p5 = 0; p5 <= n / 2 + 4; p5++) {
            document.write("*")
        }
    }
    document.write("<br>")

    for (let i = n; i >= 0; i--) {
        document.write("&nbsp;&nbsp")
        for (let z = 0; z < n / 3; z++) {
            for (let j = 0; j <= i; j++) {
                document.write("*")
            }
        }
        document.write("<br>")
        let draw = 0;
        while (draw <= space) {
            document.write("&nbsp;&nbsp")
            draw++;
        }
        space++
    }
    document.write("&nbsp;")
    document.write("*")
}


