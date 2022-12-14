let ADAM = document.getElementById("Adam");
let EVE = document.getElementById("Eva");
let APPLE = document.getElementById("Apple");


class Human {
    Img;
    Name;
    Gender;
    Weight;
    Eat;
    Say;
    CheckApple;
    Move;

    constructor(Img, Name, Gender, Weight, Eat, Say, CheckApple, Move) {
        this.Img = Img;
        this.Name = Name;
        this.Gender = Gender;
        this.Weight = Weight;
        this.Eat = Eat;
        this.Say = Say;
        this.CheckApple = CheckApple;
        this.Move = Move;
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

    setGender(Gender) {
        return this.Gender = Gender;
    }

    getGender() {
        return this.Gender;
    }

    setWeight(Weight) {
        return this.Weight = Weight;
    }

    getWeight() {
        return this.Weight;
    }

    setEat(Eat) {
        return this.Eat = Eat;
    }

    getEat() {
        return this.Eat;
    }

    setSay(Say) {
        return this.Say = Say;
    }

    getSay() {
        return this.Say;
    }

    setCheckApple(CheckApple) {
        return this.CheckApple = CheckApple;
    }

    getCheckApple() {
        return this.CheckApple;
    }

    setMove(Move) {
        return this.Move = Move;
    }

    getMove() {
        return this.Move;
    }
}

class Apple {
    Img;
    Size;
    DecreaseSize;
    Move;

    constructor(Size, DecreaseSize, Img, Move) {
        this.Img = Img;
        this.Size = Size;
        this.DecreaseSize = DecreaseSize;
        this.Move = Move

    }

    setImg(Img) {
        return this.Img = Img;
    }

    getImg() {
        return this.Img;
    }

    setSize(Size) {
        return this.Size = Size;
    }

    getSize() {
        return this.Size;
    }

    setDecreaseSize(DecreaseSize) {
        return this.DecreaseSize = DecreaseSize;
    }

    getDecreaseSize() {
        return this.DecreaseSize;
    }

    setMove(Move) {
        return this.Move = Move;
    }

    getMove() {
        return this.Move;
    }
}

// Apple
let apple = new Apple();
apple.setImg("Img/Apple.png");
APPLE.innerHTML = '<img id="apple" + src="' + apple.getImg() + '" + width="100px" height="100px" style="scale: 100% ; position: absolute ; left: 400px; top: 100px ">'
apple.setMove(30);
apple.setSize(5);

// Adam
let Adam = new Human();
Adam.setImg("Img/Walle.png");
ADAM.innerHTML = '<img id="adam" + src="' + Adam.getImg() + '" + width="400px" style="scale: 100%; position: absolute; top: 10px; left: 5px">'
Adam.setName("Adam");
Adam.setGender("Male");
Adam.setMove(30);
Adam.setEat("Adam: Tao ngon qua!!");
// Adam.getCheckApple();


// Eve
let Eva = new Human();
Eva.setImg("Img/Eve.png");
EVE.innerHTML = '<img id="eve" + src="' + Eva.getImg() + '" + width="200px" height="225px" style="scale: 100%; position: absolute; left: 600px; top: 10px ">'
Eva.setName("Eve")
Eva.setMove(30);
Eva.setEat("Eva: Tao ngon that day")


// Star Button
document.getElementById("btn").addEventListener("click", function () {
    setTimeout(SayPart1, 500);

    setTimeout(AdamMove1, 3000);

    setTimeout(LiftApple, 4000);

    setTimeout(AdamSay2, 5000);

    setTimeout(EvaMove2, 7000);

    setTimeout(EvaSay2, 8000);

    setTimeout(LiftApple2, 9000);

    setTimeout(AdamDie, 9000);

    setTimeout(EvaDie, 10000);

})
let AdamMove = document.getElementById("adam");
let EvaMove = document.getElementById('eve');
let liftApple = document.getElementById("apple");

function SayPart1() {
    Adam.setSay("Adam: Ten toi la " + Adam.getName() + " va gioi tinh la " + Adam.getGender() + " va toi yeu " + Eva.getName())
    alert(Adam.getSay());


    Eva.setSay("Eva: Ten toi la " + Eva.getName() + " va gioi tinh la " + Eva.getName() + " va toi yeu " + Adam.getName())
    alert(Eva.getSay())
}

function AdamMove1() {
    while (parseInt(AdamMove.style.left) <= 100) {
        AdamMove.style.left = parseInt(AdamMove.style.left) + Adam.getMove() + "px";
    }
}

function LiftApple() {
    while (parseInt(liftApple.style.top) >= 30) {
        liftApple.style.top = parseInt(liftApple.style.top) - apple.getMove() + "px";
    }
}

function AdamSay2() {
    alert(Adam.getEat());
}

function EvaMove2() {
    while (parseInt(EvaMove.style.left) >= 500) {
        EvaMove.style.left = parseInt(EvaMove.style.left) - Eva.getMove() + "px";
    }
}

function EvaSay2() {
    alert(Eva.getEat());
}

function LiftApple2() {
    liftApple.style.scale = "0%"
}

function AdamDie() {
    AdamMove.style.transform = 'rotate(' + (-0.25) + 'turn)';
}

function EvaDie() {
    EvaMove.style.transform = 'rotate(' + 90 + 'deg)';
}


