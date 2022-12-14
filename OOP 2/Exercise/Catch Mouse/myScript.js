let display_jerry = document.getElementById("Jerry");
let display_tom = document.getElementById('Tom');
let MOVE = true;
class Mouse {
    Img;
    Name;
    Weight;
    Speed;
    Status;
    Squeal;
    constructor(Img, Name, Weight, Speed, Status, Squeal) {
        this.Img = Img;
        this.Name = Name;
        this.Weight = Weight;
        this.Speed = Speed;
        this.Status = Status;
        this.Squeal = Squeal;
    }
    setImg(Img) {
        return this.Img = Img;
    }
    getImg() {
        return this.Img;
    }
    setName(Name) {
        return this.Name = Name;
    }
    getName() {
        return this.Name;
    }
    setWeight(Weight) {
        return this.Weight = Weight;
    }
    getWeight(){
        return this.Weight;
    }
    setSpeed(Speed) {
        return this.Speed = Speed;
    }
    getSpeed() {
        return this.Speed;
    }
    setStatus(Status) {
        return this.Status = Status;
    }
    getStatus() {
        return this.Status
    }
    setSqueal(Squeal) {
        return this.Squeal = Squeal;
    }
    getSqueal(Squeal) {
        return this.Squeal;
    }
}// Mouse
class Cat {
    Img;
    Name;
    Weight;
    Max_speed;
    Squeal;
    Catch_Mouse;
    Eat;
    constructor(Img, Name, Weight, Max_speed, Squeal, Catch_Mouse, Eat) {
        this.Img = Img;
        this.Name = Name;
        this.Weight = Weight;
        this.Max_speed = Max_speed;
        this.Squeal = Squeal;
        this.Catch_Mouse = Catch_Mouse;
        this.Eat = Eat;
    }
    setImg(Img) {
        return this.Img = Img;
    }
    getImg() {
        return this.Img;
    }
    setName(Name){
        return this.Name = Name;
    }
    getName() {
        return this.Name;
    }
    setWeight(Weight) {
        return this.Weight = Weight;
    }
    getWeight() {
        return this.Weight;
    }
    setMax_speed(Max_speed) {
        return this.Max_speed = Max_speed;
    }
    getMax_speed() {
        return this.Max_speed;
    }
    setSqueal(Squeal) {
        return this.Squeal = Squeal;
    }
    getSqueal() {
        return this.Squeal;
    }
    setCatch_Mouse(Catch_Mouse) {
        return this.Catch_Mouse = Catch_Mouse;
    }
    getCatch_Mouse () {
        return this.Catch_Mouse;
    }
    setEat(Eat) {
        return this.Eat = Eat;
    }
    getEat() {
        return this.Eat;
    }
}// Cat
let Jerry = new Mouse("Img/Jerry.png","Jerry", 1, 30, "alive", "Chit Chit");
let Tom = new Cat("Img/Tom.png", "Tom", 5, 60, "Meo Meo", "Catch You!!!", "Eat you right now!");
display_tom.innerHTML = `<img id="TomImg" src="${Tom.getImg()}" width="200px" height="200px" style="position: absolute; left: ${Tom.getMax_speed()}px; top: 5px">`
display_jerry.innerHTML =  `<img id="JerryImg" src="${Jerry.getImg()}" width="100px" height="100px" style="position: absolute; left: 400px; top: 100px">`

let JERRY = document.getElementById("JerryImg");
let TOM = document.getElementById("TomImg");



function startTom() {
        if (parseInt(TOM.style.left) < parseInt(JERRY.style.left) - 100){
            setTimeout(startTom, 500);
           return  TomMove();
        } else {
            return catchOk();
        }

}
startTom();
function startJerry() {
        if (parseInt(JERRY.style.left) - 100 > parseInt(TOM.style.left)){
            JerryMove();
        }
            setTimeout(startJerry, 500);
}
startJerry();


function TomMove() {
    TOM.style.left = parseInt(TOM.style.left) + Tom.getMax_speed() + "px";
}

function JerryMove() {
    JERRY.style.left = parseInt(JERRY.style.left) + Jerry.getSpeed() + "px";
}

function catchOk() {
    alert(Jerry.getSqueal());
    alert(Tom.getCatch_Mouse());
    alert(Tom.getEat());
    Jerry.setStatus("DIE");
    alert("Jerry " + Jerry.getStatus());
}
