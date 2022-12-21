const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas);
canvas.width = 1024;
canvas.height = 567;
const gravity = 1.5;
let checkWin = 0;
class Player {
    Position;
    Width;
    Height;
    Draw;
    Velocity;
    Update;
    constructor() {
        this.Position = {
            x: 100,
            y: 100
        }
        this.Velocity = {
            x: 0,
            y: 0
        }
        this.Width = 30;
        this.Height = 30;
        this.Draw = function () {
            ctx.fillStyle = "red";
            ctx.fillRect(this.Position.x, this.Position.y, this.Width, this.Height);
        }
        this.Update = function () {
            this.Draw();
            this.Position.y += this.Velocity.y;
            this.Position.x += this.Velocity.x;
            if (this.Position.y + this.Height + this.Velocity.y <= canvas.height) {
                this.Velocity.y += gravity;
            } else {
                this.Velocity.y = 0;
            }

        }
    }
}
class Platform {
    Position;
    Width;
    Height;
    Draw;
    Image;
    constructor({x, y, Image}) {
        this.Position = {
            x,
            y
        }
        this.Image = Image;
        this.Width = Image.width;
        this.Height = Image.height;
        this.Draw = function () {
            ctx.drawImage(this.Image, this.Position.x, this.Position.y, this.Width, this.Height)
        }
    }
}

class GenericObj {
    Position;
    Width;
    Height;
    Draw;
    Image;
    constructor({x, y, Image}) {
        this.Position = {
            x,
            y
        }
        this.Image = Image;
        this.Width = Image.width;
        this.Height = Image.height;
        this.Draw = function () {
            ctx.drawImage(this.Image, this.Position.x, this.Position.y, this.Width, this.Height)
        }
    }
}


// Platform img
const platformImg = new Image();
platformImg.src = 'Img/platform.png'

// Background img
const  backgroundImg = new Image();
backgroundImg.src = 'Img/background.png'

// Hill img
const hillImg = new Image();
hillImg.src = 'Img/hills.png'

const character = new Player();
const platforms = [new Platform({x:-1, y:470, Image:platformImg}), new Platform({x:platformImg.width - 3, y:470, Image:platformImg})];
const genericObjs = [new GenericObj({x: -1, y:-1, Image:backgroundImg}), new GenericObj({x: -1, y:-1, Image:hillImg})];

character.Update();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, canvas.width, canvas.height);

    // Draw background and hill
    genericObjs.forEach(function (genericObj) {
        genericObj.Draw();
    })

    // Draw platform
    platforms.forEach(function (platform) {
        platform.Draw();
    })

    // Draw Character
    character.Update();


    if (keys.right.pressed && character.Position.x < 400) {
        character.Velocity.x = 5;
    } else if (keys.left.pressed && character.Position.x > 50) {
        character.Velocity.x = -5;
    } else {
        character.Velocity.x = 0;
        if (keys.right.pressed) {
            genericObjs.forEach(function (genericObj) {
                genericObj.Draw();
                genericObj.Position.x -=3;
            })
            platforms.forEach(function (platform) {
                platform.Draw();
                platform.Position.x -=5;
            })
            character.Draw();
            checkWin += 5;
            console.log(checkWin);
        } else if (keys.left.pressed) {
            genericObjs.forEach(function (genericObj) {
                genericObj.Draw();
                genericObj.Position.x +=3;
            })
            platforms.forEach(function (platform) {
                platform.Draw();
                platform.Position.x += 5;
            })
            character.Draw();
            checkWin -= 5;
            console.log(checkWin);
        }
    }
    platforms.forEach(function (platform) {
        if (character.Position.y + character.Height <= platform.Position.y
            && character.Position.y + character.Height + character.Velocity.y >= platform.Position.y
            && character.Position.x + character.Width >= platform.Position.x
            && character.Position.x <= platform.Position.x + platform.Width) {
            character.Velocity.y = 0;
        }
    })
    if (checkWin > 2000) {
        console.log("You Win")
    }
}
animate();

window.addEventListener("keydown", function ({keyCode}) {
    switch (keyCode) {
        case 38:
            console.log("up")
            character.Velocity.y -= 20;
            break;
        case 39:
            console.log("right")
           keys.right.pressed = true;
            break;
        case 37:
            console.log("left")
            keys.left.pressed = true;
            break;
        case 40:
            console.log("Down")
            break;
    }
})
window.addEventListener("keyup", function ({keyCode}) {
    switch (keyCode) {
        case 38:
            console.log("up")
            // character.Velocity.y -= 20;
            break;
        case 39:
            console.log("right")
            keys.right.pressed = false;
            break;
        case 37:
            console.log("left")
            keys.left.pressed = false;
            break;
        case 40:
            console.log("Down")
            break;
    }
})

