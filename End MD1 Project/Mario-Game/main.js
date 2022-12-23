const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 567;
let scrollOffset = 0;
let checkLose = 3;
// let checkStart = false
startGame();

function animate() {
    let start = requestAnimationFrame(animate);
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw background and hill
        genericObjs.forEach(function (genericObj) {
            genericObj.draw();
        })

        // draw platform
        platforms.forEach(function (platform) {
            platform.draw();
        })

        lifeContent(checkLose)

        npcPrincess.draw()

        // draw Character
        character.update();



    if (character.position.x + character.height >= npcPrincess.position.x + 60
        && character.position.y + character.height >= npcPrincess.position.y + 30
        && character.position.x <= npcPrincess.width + npcPrincess.position.x - 30) {
        cancelAnimationFrame(start)
        window.setTimeout(function () {
            document.querySelector("html").style.cursor = "url(\"Img/gameCusor.png\"),auto"
        },8500)
        winEvent()
    } else {
        if (keys.right.pressed && character.position.x < 400) {
            character.velocity.x = 5;
        } else if (keys.left.pressed && character.position.x > 10) {
            character.velocity.x = -5;
        } else {
            character.velocity.x = 0;
            if (keys.right.pressed && scrollOffset < 5370) {
                genericObjs.forEach(function (genericObj) {
                    genericObj.draw();
                    genericObj.position.x -= 3;
                })
                platforms.forEach(function (platform) {
                    platform.draw();
                    platform.position.x -= 5;
                })
                npcPrincess.position.x -= 5;
                npcPrincess.draw();
                character.draw();
                scrollOffset += 5;
                lifeContent(checkLose)
                console.log("hello" + scrollOffset)
            } else if (keys.left.pressed && scrollOffset > 0) {
                genericObjs.forEach(function (genericObj) {
                    genericObj.draw();
                    genericObj.position.x += 3;
                })
                platforms.forEach(function (platform) {
                    platform.draw();
                    platform.position.x += 5;
                })
                npcPrincess.position.x += 5;
                npcPrincess.draw();
                character.draw();
                scrollOffset -= 5;
                lifeContent(checkLose)
            }
        }
    }


    platforms.forEach(function (platform) {
        if (character.position.y + character.height <= platform.position.y
            && character.position.y + character.height + character.velocity.y >= platform.position.y
            && character.position.x + character.width >= platform.position.x
            && character.position.x <= platform.position.x + platform.width) {
            character.velocity.y = 0;
        }
    })

    if (character.position.y >= canvas.height) {
        checkLose--;
        if (checkLose !== 0) {
            scrollOffset = 0;
            reset_npc_character()
            reset();
        } else {
            cancelAnimationFrame(start)
            window.setTimeout(function () {
                document.querySelector("html").style.cursor = "url(\"Img/gameCusor.png\"),auto"
            },3500)
            // document.querySelector("html").style.cursor = "url(\"Img/gameCusor.png\"),auto"
            loseEvent();
        }
    }
}
