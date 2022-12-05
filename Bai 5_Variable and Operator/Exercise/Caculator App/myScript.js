// Display Operator
const display_operators = document.getElementsByClassName('btn');
const Display_operator = document.getElementById('item1');
const Operator = ["+","-","x","/","."];

for (let display_operator of display_operators) {
    display_operator.addEventListener('click',function () {
        if (Display_operator.innerHTML.length === 0){

            // Disable if item1 = 0
            if (event.target.matches('.operator-btn')){
                window.alert('You need to input number first');
            } else{
                Display_operator.innerHTML += this.value}
        } else {

            let checkerror;
            let check = Display_operator.innerHTML.substring(Display_operator.innerHTML.length -1, Display_operator.innerHTML.length);
            for (let operator of Operator) {
                if (check == operator){
                    checkerror = true;
                } else {
                    !checkerror
                }
            }

            if (event.target.matches('.operator-btn') && checkerror){
                window.alert('Khung ha may')
            } else if (event.target.matches('.operator-btn') && !checkerror){
                Display_operator.innerHTML += this.value
            } else if (!event.target.matches('.operator-btn')){
                Display_operator.innerHTML += this.value
            }
        }
    })
}

// Display Result
function equal() {
    let checkerror;
    if (Display_operator.innerHTML.length <= 0) {
        window.alert("Don't forget input some value :))))) LOL")
    } else {
        let res
        let change_operator = Display_operator.innerHTML.includes("x");
        if (change_operator) {
            res = Display_operator.innerHTML.replaceAll("x","*");
            console.log(res)
        } else {
            res = Display_operator.innerHTML;
        }

        let check = Display_operator.innerHTML.substring(Display_operator.innerHTML.length -1, Display_operator.innerHTML.length);
        for (let operator of Operator) {
                        if (check == operator){
                            checkerror = true;
                        } else {
                            !checkerror
                        }
        }
        console.log(checkerror)

        if (checkerror){
          window.alert('Oop! Co loi xay ra, xin kiem tra lai bieu thuc');
        } else {
            let result = eval(res);
            document.getElementById('item2').innerHTML = result;
            Display_operator.innerHTML = result;
        }
    }
}

// Reset display
function Reset() {
    Display_operator.innerHTML = " ";
    document.getElementById('item2').innerHTML = 0;
}

//Delete display
function Delete() {
    if (Display_operator.innerHTML.length > 0) {
        let result = Display_operator.innerHTML.substring(0, Display_operator.innerHTML.length - 1)
        Display_operator.innerHTML = result;
    } else {
        document.getElementById('item2').innerHTML = 0;
    }
}