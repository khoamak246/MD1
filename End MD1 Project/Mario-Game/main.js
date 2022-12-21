const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 567;

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, canvas.width, canvas.height);

    // draw background and hill
    genericObjs.forEach(function (genericObj) {
        genericObj.draw();
    })

    // draw platform
    platforms.forEach(function (platform) {
        platform.draw();
    })

    // npcPrincess.draw();

    // draw Character
    character.update();


    // if (character.position.x + character.height + character.velocity.x >= npcPrincess.position.x
    //     && character.position.y + character.height + character.velocity.y >= npcPrincess.position.y) {
    //     character.velocity.x = 0;
    //     character.velocity.y = 0;
    //     console.log("You Win")
    // } else {
        if (keys.right.pressed && character.position.x < 400) {
            character.velocity.x = 5;
        } else if (keys.left.pressed && character.position.x > 50) {
            character.velocity.x = -5;
        } else {
            character.velocity.x = 0;
            if (keys.right.pressed) {
                genericObjs.forEach(function (genericObj) {
                    genericObj.draw();
                    genericObj.position.x -=3;
                })
                platforms.forEach(function (platform) {
                    platform.draw();
                    platform.position.x -=5;
                })
                // npcPrincess.position.x -= 5;
                // npcPrincess.draw();
                character.draw();
            } else if (keys.left.pressed) {
                genericObjs.forEach(function (genericObj) {
                    genericObj.draw();
                    genericObj.position.x +=3;
                })
                platforms.forEach(function (platform) {
                    platform.draw();
                    platform.position.x += 5;
                })
                // npcPrincess.position.x += 5;
                // npcPrincess.draw();
                character.draw();
            }
        }
    // }


    platforms.forEach(function (platform) {
        if (character.position.y + character.height <= platform.position.y
            && character.position.y + character.height + character.velocity.y >= platform.position.y
            && character.position.x + character.width >= platform.position.x
            && character.position.x <= platform.position.x + platform.width) {
            character.velocity.y = 0;
        }
    })

    if (character.position.y >= canvas.height) {
        character.position.x = 100;
        character.position.y = 100;

        platforms =  [new Platform({x:-1, y:470, image:platformImg}),
            new Platform({x:platformImg.width - 3, y:470, image:platformImg}),
            new Platform({x:2 * platformImg.width + 130, y:470, image:platformImg})];


        genericObjs = [new Platform({x: -1, y:-1, image:backgroundImg}), new Platform({x: -1, y:-1, image:hillImg})];
        npcPrincess.position.x = 1500;
        npcPrincess.position.y = 470 - npcPrincess.height - 1.5;
        npcPrincess.gravity = 0;
    }
}
animate();