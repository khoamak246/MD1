// Pratice 1
function test_variable() {
    let i = 10
    let f = 20.5
    let b = true
    let s = "Ha Noi"

    document.write('i = ' + i)
    document.write('<br/>')
    document.write('f = ' + f)
    document.write('<br/>')
    document.write('b = ' + b)
    document.write('<br/>')
    document.write('s = ' + s)
}

// Practice 2
function area1() {
    let width = 20
    let height = 10
    let area = width * height

    document.getElementById('area').innerHTML = area;
}

// Practice 3
function testmod() {
    let a = prompt('Input the first number:', '10')
    let b = prompt('Input the second number', '10')
    if (parseInt(a) % parseInt(b) == 0) {
        window.alert(a + " " + "chia het cho" + " " + b)
        document.getElementById('mod_answer').innerHTML = a + " " + "chia het cho" + " " + b;
    } else {
        window.alert(a + " " + "khong chia het cho" + " " + b)
        document.getElementById('mod_answer').innerHTML = a + " " + "khong chia het cho" + " " + b;
    }
}

