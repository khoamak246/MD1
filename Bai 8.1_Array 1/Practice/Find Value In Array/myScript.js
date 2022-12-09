let inputValue = prompt('Nhap gia tri: ', "");
let numbers = [-3, 5, 1, 3, 2, 10];
for (let i = 0; i < numbers.length; i++) {
    if (inputValue == numbers[i]){
        window.alert("Value " + numbers[i] + " found at " + i)
    }
}