
function print5Time() {
    let TONG = 0;
    let x = parseInt(document.getElementById('nhapN').value)
    for (let i = 0; i <= x; i++) {
        TONG += i;
        let DIV = document.createElement('div');
        DIV.innerHTML = "The number is: " + i;
        document.getElementById('result').append(DIV);
    }
    window.alert("Tong cac so la: " + TONG);
}