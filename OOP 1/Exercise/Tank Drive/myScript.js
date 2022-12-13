let Tank = document.getElementById('tank');
let Boom = document.getElementById('boom');
let Coin = document.getElementById('coin');
let count = 0;
let Check_Speed;
function init() {
    Tank.style.position = 'relative';
    Tank.style.top = '0px'
    Tank.style.left = '0px';
    Boom.style.position = 'relative';
    Boom.style.top = '200px';
    Boom.style.left = '500px';
    Coin.style.position = 'relative';
    Coin.style.top = '0px';
    Coin.style.left = '500px'
    Coin.style.display = "inline";
}
init();
function moveDow() {
    Tank.src = "Img/tank_down.png"
    if (Check_Speed === false){
        Tank.style.top = parseInt(Tank.style.top) + 10 + 'px';
    } else {
        Tank.style.top = parseInt(Tank.style.top) + 50 + 'px';
    }
}

function moveUp() {
    Tank.src = "Img/tank_up.png"
    if (Check_Speed === false) {
        Tank.style.top = parseInt(Tank.style.top) - 10 + 'px';
    } else {
        Tank.style.top = parseInt(Tank.style.top) - 50 + 'px';
    }

}

function moveRight() {
    Tank.src = "Img/tank_right.png"
    if (Check_Speed === false) {
        Tank.style.left = parseInt(Tank.style.left) + 10 + 'px';
    } else {
        Tank.style.left = parseInt(Tank.style.left) + 50 + 'px';
    }
}

function moveLeft() {
    Tank.src = "Img/tank_left.png"
    if (Check_Speed === false) {
        Tank.style.left = parseInt(Tank.style.left) - 10 + 'px';
    } else {
        Tank.style.left = parseInt(Tank.style.left) - 50 + 'px';
    }

}
function moveSelection(MoveEvt){
    switch (MoveEvt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDow();
            break;
        case 17:
            Check_Speed = true;
            break;
    }
    CheckExplosion();
}
document.body.onload = docReady;
function docReady() {
    window.addEventListener('keydown', moveSelection);
    window.addEventListener('keyup', Speed_down);
}
function Speed_down() {
    Check_Speed = false;
}
function CheckExplosion() {
    // Boom touch
    let topBoom = parseInt(Boom.style.top) - 70 + 'px';
    let bottomBoom = parseInt(Boom.style.top) + 80 + "px";
    let leftBoom = parseInt(Boom.style.left) + 20 + "px";
    let rightBoom = parseInt(Boom.style.left) + 200 +  "px";
    if(parseInt(Tank.style.top) >=parseInt(topBoom)
        && parseInt(Tank.style.left) >= parseInt(leftBoom)
        && (parseInt(Tank.style.top) <= parseInt(bottomBoom))
        && parseInt(Tank.style.left) <= parseInt(rightBoom)

    ){
        Tank.src = 'Img/explosion.png';
        Boom.src = 'Img/explosion.png';
    }


    let topCoin = parseInt(Coin.style.top) - 70 + 'px';
    let bottomCoin = parseInt(Coin.style.top) + 80 + "px";
    let leftCoin = parseInt(Coin.style.left) + 130 + "px";
    let rightCoin = parseInt(Coin.style.left) + 290 +  "px";
    if(parseInt(Tank.style.top) >=parseInt(topCoin)
        && parseInt(Tank.style.left) >= parseInt(leftCoin)
        && (parseInt(Tank.style.top) <= parseInt(bottomCoin))
        && parseInt(Tank.style.left) <= parseInt(rightCoin)

    ){
        count++
        document.getElementById("result").innerHTML = "Score: " + count;
        let x = Math.round(Math.random() * window.innerWidth);
        let y = Math.round(Math.random() * window.innerHeight);
        Coin.style.left = x + "px";
        Coin.style.top = y + "px";

        // let newBoom = document.createElement("img");
        // newBoom.src = "Img/boom.png";
        // newBoom.className = "boom";
        // newBoom.style.width = "100px";
        // newBoom.style.height = "100px"
        // newBoom.style.display = "inline";
        // newBoom.style.position = "relative";
        // let x1 = Math.round(Math.random() * window.innerWidth);
        // let y1 = Math.round(Math.random() * window.innerHeight);
        // newBoom.style.left = x1 + "px";
        // newBoom.style.top = y1 + "px";
        // document.body.append(newBoom);
    }
    // let BOOM = document.getElementsByClassName("boom");
    // if (parseInt(Tank.style.top) >= parseInt(BOOM.style.left)){
    // console.log("1");
    // }
}
