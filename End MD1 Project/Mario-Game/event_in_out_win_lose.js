function drawIntro_Outro(image, x, y, width, height) {
    ctx.drawImage(image, x, y, width, height)
}

function createButton(button) {
    document.body.append(button)
}

function drawIntro_Outro_Opacity(image, x, y, width, height, opacity) {
    ctx.globalAlpha = opacity
    ctx.drawImage(image, x, y, width, height)
}

function hideButton() {
    let btn = document.getElementsByClassName("button")
    for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none"
    }
}

function addEventButton(button) {
    button.style.cursor = "pointer"
    button.addEventListener('mouseover', function () {
        button.style.scale = "120%"
    })
    button.addEventListener('mouseout', function () {
        button.style.scale = "100%"
    })
}

// Start Game
function startGame() {
    const menuBackground = new Image();
    menuBackground.src = 'Img/menuBackground.jpg'
    menuBackground.onload = function () {
        ctx.drawImage(menuBackground, 0, 0);
    }
    const startMenuBoard = new Image();
    startMenuBoard.src = 'Img/menuBoard.png'
    startMenuBoard.onload = function () {
        setTimeout(drawIntro_Outro, 1000, startMenuBoard, canvas.width / 2 - startMenuBoard.width / 2, canvas.height / 2 - startMenuBoard.height / 2, startMenuBoard.width, startMenuBoard.height)
    }

    const logo = new Image();
    logo.src = 'Img/logo.png'
    logo.width = 220;
    logo.height = 120;
    logo.onload = function () {
        setTimeout(drawIntro_Outro, 2000, logo, canvas.width / 2 - logo.width / 2, 130, logo.width, logo.height)
    }

    const startBtn = document.createElement('img');
    startBtn.src = 'Img/startButton.png'
    startBtn.width = 250;
    startBtn.height = 70;
    startBtn.className = "button"
    startBtn.style.position = "absolute";
    startBtn.style.top = "300px";
    startBtn.style.left = "520px";
    addEventButton(startBtn);

    startBtn.onload = function () {
        setTimeout(createButton, 2500, startBtn);
    }

    const backButton = new Image();
    backButton.src = 'Img/backButton.png'
    backButton.className = "button"
    backButton.width = 150;
    backButton.height = 70;
    backButton.style.position = "absolute";
    backButton.style.top = "400px";
    backButton.style.left = "450px";
    addEventButton(backButton)
    backButton.addEventListener('click', function () {
        hideButton()
        startGame();
    })


    const aboutBoard = new Image();
    aboutBoard.src = 'Img/aboutBoard.png'
    const aboutBtn = new Image();
    aboutBtn.src = 'Img/aboutButton.png'
    aboutBtn.width = 250;
    aboutBtn.height = 70;
    aboutBtn.className = "button"
    aboutBtn.style.position = "absolute";
    aboutBtn.style.top = "390px";
    aboutBtn.style.left = "520px";
    aboutBtn.onload = function () {
        setTimeout(createButton, 3000, aboutBtn);
        startBtn.addEventListener('click', function () {
            setTimeout(animate, 500)
            setTimeout(hideButton, 500)
        })
    }
    addEventButton(aboutBtn);
    aboutBtn.addEventListener('click', function () {
        drawIntro_Outro(aboutBoard, canvas.width / 2 - startMenuBoard.width / 2, canvas.height / 2 - startMenuBoard.height / 2, startMenuBoard.width, startMenuBoard.height)
        hideButton()
        createButton(backButton);
    })

}

//Lose Game
let radius = 0;

function fillArcCanvas() {
    if (radius <= canvas.height + 100) {
        requestAnimationFrame(fillArcCanvas)
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        let radiusIncrease = 15;
        radius = radius + radiusIncrease;
        ctx.fillStyle = "#393835";
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI, true)
        ctx.fill();
    } else {
        ctx.fillStyle = "#393835";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

function loseEvent() {
    fillArcCanvas()

    const overMenuBoard = new Image();
    overMenuBoard.src = 'Img/menuBoard.png'
    overMenuBoard.onload = function () {
        setTimeout(drawIntro_Outro, 1500, overMenuBoard, canvas.width / 2 - overMenuBoard.width / 2, canvas.height / 2 - overMenuBoard.height / 2, overMenuBoard.width, overMenuBoard.height)
    }

    const gameOver = new Image();
    gameOver.src = 'Img/gameOverImg.png'
    gameOver.width = 250;
    gameOver.height = 250;
    gameOver.onload = function () {
        setTimeout(drawIntro_Outro, 2000, gameOver, canvas.width / 2 - gameOver.width / 2, canvas.height / 2 - gameOver.height + 30, gameOver.width, gameOver.height);
    }

    const restartButton = new Image();
    restartButton.src = 'Img/restartButton.png'
    restartButton.width = 250;
    restartButton.height = 70;
    restartButton.className = "button"
    restartButton.style.position = "absolute";
    restartButton.style.top = "300px";
    restartButton.style.left = "520px";
    addEventButton(restartButton);
    restartButton.addEventListener('click', function () {
        checkLose = 4;
        scrollOffset = 0;
        reset_npc_character()
        reset();
        animate();
        hideButton();
    })
    restartButton.onload = function () {
        setTimeout(createButton, 2500, restartButton);
    }

    const homepageButton = new Image();
    homepageButton.src = 'Img/homePageButton.png'
    homepageButton.width = 250;
    homepageButton.height = 70;
    homepageButton.className = "button"
    homepageButton.style.position = "absolute";
    homepageButton.style.top = "390px";
    homepageButton.style.left = "520px";
    addEventButton(homepageButton);
    homepageButton.addEventListener('click', function () {
        hideButton();
        checkLose = 4;
        startGame();
    })
    homepageButton.onload = function () {
        setTimeout(createButton, 3000, homepageButton);
    }
}

// win event
let scaleFireWork = 0;
let countFire = 0;

const fireWorkLeft = new Image();
fireWorkLeft.src = "Img/fireWork.png";
fireWorkLeft.style.position = 'absolute';
fireWorkLeft.style.left = "500px";
fireWorkLeft.style.left = "700px";
fireWorkLeft.style.scale = "60%"

const fireWorkRight = new Image();
fireWorkRight.src = "Img/fireWork.png";
fireWorkRight.style.position = 'absolute';
fireWorkRight.style.left = "500px";
fireWorkRight.style.left = "200px";
fireWorkRight.style.scale = "60%"


function winEvent() {
    let id = requestAnimationFrame(winEvent)

    let scaleIncrease = 1;
    scaleFireWork = scaleFireWork + scaleIncrease;
    fireWorkRight.style.scale = scaleFireWork + "%"
    fireWorkLeft.style.scale = scaleFireWork + "%"
    createButton(fireWorkLeft);
    createButton(fireWorkRight);
    if (scaleFireWork === 60) {
        scaleFireWork = 0;
        countFire++
    }
    if (countFire === 3) {
        cancelAnimationFrame(id);
        fireWorkLeft.style.display = "none";
        fireWorkRight.style.display = "none";
        winBackground()
    }
}

let opacity = 0;

function winBackground() {
    let id = requestAnimationFrame(winBackground)
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#D8C5A4"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    let opacityIncrease = 0.0009;
    opacity = opacity + opacityIncrease;
    if (opacity > 0.1) {
        cancelAnimationFrame(id);
        winContent();
    }
}

function winContent() {
    const awesome = new Image();
    awesome.src = "Img/awesome.png"
    awesome.width = 400;
    awesome.height = 130;
    const winMenuBoard = new Image();
    winMenuBoard.src = 'Img/menuBoard.png'
    awesome.onload = function () {
        setTimeout(drawIntro_Outro_Opacity, 2001, awesome, canvas.width / 2 - awesome.width / 2, canvas.height / 3 - 1.4 * awesome.height, awesome.width, awesome.height, 1)
    }

    winMenuBoard.onload = function () {
        setTimeout(drawIntro_Outro_Opacity, 2000, winMenuBoard, canvas.width / 2 - winMenuBoard.width / 2, canvas.height / 2 - winMenuBoard.height / 2, winMenuBoard.width, winMenuBoard.height, 1)
    }
    const youWin = new Image();
    youWin.src = "Img/youWinLabel.png"
    youWin.width = 400;
    youWin.height = 250;

    youWin.onload = function () {
        setTimeout(drawIntro_Outro, 2500, youWin, canvas.width / 2 - youWin.width / 2, canvas.height / 3 - youWin.height / 2 + 20, youWin.width, youWin.height)
    }

    const homepageWin = new Image();
    homepageWin.src = "Img/homepageWin.png"
    homepageWin.width = 300;
    homepageWin.height = 150;
    homepageWin.className = "button"
    homepageWin.style.position = "absolute";
    homepageWin.style.left = "500px";
    homepageWin.style.top = "300px";
    addEventButton(homepageWin);
    homepageWin.addEventListener('click', function () {
        hideButton();
        checkLose = 3;
        scrollOffset = 0;
        reset_npc_character()
        reset();
        startGame();
    })
    homepageWin.onload = function () {
        setTimeout(createButton, 3000, homepageWin)
    }
    opacity = 0;
}


