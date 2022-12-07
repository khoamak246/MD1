function CheckYear() {
    let YEAR = parseInt(document.getElementById("check_year").value);
    console.log(YEAR)
    if (YEAR % 4 == 0) {
        if (YEAR % 100 == 0) {
            if (YEAR % 400 == 0) {
                alert(YEAR + " is a leap YEAR");
            } else {
                alert(YEAR + " is NOT a leap YEAR");
            }
        } else {
            alert(YEAR + " is a leap YEAR");
        }
    } else {
        alert(YEAR + " is NOT a leap YEAR");
    }

}