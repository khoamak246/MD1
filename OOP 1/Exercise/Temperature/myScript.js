let temperature = function (celsius) {
    this.get_celsius = function () {
        return celsius;
    }
    this.fahrenheit = function () {
        return celsius / 5 / 9 + 32;
    }
    this.kevin = function () {
        return celsius + 273.15;
    }
}
let Temperature = new temperature(25);
let celsius = Temperature.get_celsius();
let fahrenheit = Temperature.fahrenheit().toFixed(2);
let kevin = Temperature.kevin();
document.write("Do C la: " + celsius + " Do F la: " + fahrenheit + " Do K la: " + kevin);
