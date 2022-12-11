function isPrime(number) {
    let checkCondition = 0;
    if (number < 2){
        return "Day khong phai so nguyen to";
    } else {
        for (let i = 1; i < number; i++) {
                if (number % i === 0){
                    checkCondition++
                }
        }
        if (checkCondition === 1) {
            window.alert("Day la so nguyen to");
        } else {
            window.alert("Day khong phai so nguyen to");
        }
    }
}

let getInputNum = parseFloat(prompt('Nhap so cua ban', '2'));
let result = isPrime(getInputNum);