// Part 1
function checkBrower() {
    let browser = prompt("Which brower?","")
    switch (browser) {
        case 'Edge':
            window.alert("You've got the Edge!");
            break
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
        window.alert("Okay we support these browsers too!")
            break

        default:
            window.alert("We hope that this page looks ok!")
    }
}

// Part 2
function checkvalue() {
    let a = prompt("a?",'')
    switch (a) {
        case '0':
            window.alert('0')
            break
        case '1':
            window.alert('1')
            break
        case '2':
        case '3':
            window.alert("2,3")
            break
    }
}

// Part 3
function caculate() {
    console.log("1"+2+4);
    let x = parseInt(prompt('Nhap so:',''));
    if (x > 0) {
        window.alert('1')
    } else if (x < 0) {
        window.alert('-1')
    } else {
        window.alert('0')
    }
}