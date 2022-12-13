let Rectangle = function (width, height) {
    this.width = function () {
        return width;
    }
    this.height = function () {
        return height;
    }
    this.area = function () {
        return width * height;
    }
    this.perimeter = function () {
        return 2 * (width + height)
    }
    this.draw = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.strokeRect(600, 200, width, height);
    }
}

let rectangle = new Rectangle(100, 70);
let Width = rectangle.width();
let Height = rectangle.height();
let Area = rectangle.area();
let Perimeter = rectangle.perimeter();
alert("Chieu dai la " + Width + " Chieu cao la: " + Height + " Dien tich la: " + Area + " Chu vi la: " + Perimeter);
rectangle.draw();
