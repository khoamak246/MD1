let num = parseFloat(prompt('Enter number',''));
let total = 0;

while (num !=-1 || num ==null) {
    num = parseFloat(prompt('Enter number:'));
    total += num;
    window.alert(total)
}


let i = 1;
while (i < 100) {
    document.write("<hr width = " + i + "%>");
    i++;
}
