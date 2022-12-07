function caculate() {
 let WEIGHT = parseInt(document.getElementById('bmi').value)
    let HEIGHT = parseInt(document.getElementById('height').value)
    let BMI_VALUE = WEIGHT / ((HEIGHT/100) ^ 2);
    if (BMI_VALUE < 18){
        window.alert('Underweight')
    } else if (BMI_VALUE < 25) {
        window.alert('Normal')
    } else if (BMI_VALUE < 30) {
        window.alert('Overweight')
    } else {
        window.alert('Obese')
    }
}