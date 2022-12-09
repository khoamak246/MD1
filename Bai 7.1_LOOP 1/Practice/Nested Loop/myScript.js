let sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
for (i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.getElementById('result').innerHTML = sout;


let sout1, r2, c2;
sout1 = "<table border='1' width='300' cellpadding='0' cellspacing='0'>";
r2 = c2 = 1;
while (r2 <= 10) {
    sout1 = sout1 + "<tr>";
    while (c2 <= 10){
        sout1 = sout1 + "<td>" + r2 * c2 + "</td>";
        c2++
    }
    sout1 = sout1 + "</tr>"
    c2 = 1;
    r2++
}
sout1 = sout1 + "</table>"
document.getElementById('result2').innerHTML = sout1