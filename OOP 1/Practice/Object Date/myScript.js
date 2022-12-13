let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }

}

let Date = new myDate(2, 2, 2002);
Date.setDay(10);
Date.setMonth(10);
Date.setYear(2019);
let day = Date.getDay();
let month = Date.getMonth();
let year = Date.getYear();
alert(day + "/" + month + "/" + year);
