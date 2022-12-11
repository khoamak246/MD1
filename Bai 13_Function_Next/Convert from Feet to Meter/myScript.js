function footToMeter(foot) {
      return foot * 0.305;
}

function meterToFoot(meter) {
    return  meter * 3.297;

}
let result;
let getConfirm = confirm('Don click "Yes" if meter or "Cancel" if Foot');
if (getConfirm){
    let getInputMeterNumber = parseFloat(prompt("Nhap so (meter)",''));
    result = meterToFoot(getInputMeterNumber);
} else {
    let getInputFootNumber = parseFloat(prompt("Nhap so (foot)",''));
    result = footToMeter(getInputFootNumber);
}
window.alert("Your result is: "  + result);