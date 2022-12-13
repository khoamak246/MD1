let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return radius;
    }
    this.getArea = function () {
        return Math.pow(radius,2) * Math.PI;
    }
    this.getPerimeter = function () {
        return 2 * radius * Math.PI;
    }
}
let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea().toFixed(2);
let perimeter = circle.getPerimeter().toFixed(2);

window.alert("radius: " + radius + " area: " + area + " perimeter: " + perimeter);