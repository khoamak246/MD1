function checkPalidrome(text) {
   let CHECK_CONDITION = true;
    for (let i = 1; i < text.length; i++) {
        if (text[i - 1] !== text[text.length - i]) {
            CHECK_CONDITION = false
            break;
        }
    }
    if (CHECK_CONDITION) {
        return window.alert(text + " La chuoi Palidrome");
    } else {
        return window.alert(text + " Khong phai la chuoi Palidrome");
    }
}

let inputText = prompt('Nhap chuoi ki tu cua ban: ', '');
checkPalidrome(inputText);