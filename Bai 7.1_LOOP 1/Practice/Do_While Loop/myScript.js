let x = parseInt(prompt('Nhap vao so tu 1 -> 10:', ''));
let value = null;
do {
    value = x;
    document.writeln("Thu tu so la:" + value );
    x++;
} while (x > 0 && x < 10);
