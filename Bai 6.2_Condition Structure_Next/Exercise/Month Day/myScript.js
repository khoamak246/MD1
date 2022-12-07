function caculate() {
    let MONTH = parseInt(document.getElementById('month').value);
    let DAY = document.getElementById('day')
    switch (MONTH) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            DAY.value = 31;
            break;
        case 2:
            DAY.value = 28, 29;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            DAY.value = 30;
            break;
    }
}