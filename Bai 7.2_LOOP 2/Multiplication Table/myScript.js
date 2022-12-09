let result; // Table

result = "<table border='1' cellspacing='0' cellpadding='3'>"
for (let r = 1; r <= 9; r++) {
    result = result + "<tr>"
    for (let c = 1; c <= 9; c++) {
        result = result + "<td>" + c + " x " + r + " = " + c * r + "</td>"
    }
    result = result + "</tr>"
}
result = result + "</table>"
document.write(result)