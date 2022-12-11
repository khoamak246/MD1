// Exercise 1 - Display "Xin chao" Function
function Exercise1() {
   return  window.alert("Xin chao");
}

//Exercise 2 - Increment Value by One
function Exercise2() {
   let inputNum = parseFloat(prompt('Nhap so cua ban: ', ''));
   let result = incrementValue(inputNum);
   window.alert("Ket qua la: " + result);
}
function incrementValue(number) {
   return ++number;
}

//Exercise 3 - Return Value of 2 Parameter
function Exercise3() {
   let inputNum1 = parseFloat(prompt('Nhap vao so dau tien:', ''));
   let inputNum2 = parseFloat(prompt('Nhap vao so thu hai:', ''));
   let result = displayValue(inputNum1, inputNum2);
   return window.alert('Ket qua cua ban la: ' + result);
}

function displayValue() {
   let inputArg1 = arguments[0];
   let inputArg2 = arguments[1];
   if (inputArg1 > inputArg2) {
      return inputArg1;
   } else {
      return inputArg1 + inputArg2;
   }
}

//Exercise 4 - Add Alert to Built-in Function
function built_in_function_exercise4() {
  let  firstNum = 4;
  let  secondNum = 8;
   result4 = firstNum + secondNum;
   return result4;
}
let result4 = 0;
function Exercise4() {
   window.alert("Before call function: " + result4);
   result4 = built_in_function_exercise4();
   window.alert("After call function: " + result4);
}

// Exercise 5 - Find Value in Two Array
let StarNameArray1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let StarNameArray2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function checkArray(star) {
   if (StarNameArray1.includes(star) || StarNameArray2.includes(star)){
      return "Co chom sao: " + star;
   } else {
      return "Khong co chom sao nhu ban vua nhap.";
   }
}
function Exercise5() {
   let InputValue = prompt('Nhap ten chom sao:', '');
   let result = checkArray(InputValue);
   window.alert(result);
}


