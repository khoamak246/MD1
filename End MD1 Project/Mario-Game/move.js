const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
let checkJump = true;
window.addEventListener("keydown", function ({keyCode}) {
    switch (keyCode) {
        case 38:
            console.log("up")
            if (checkJump) {
                if (character.position.y <= 0) {
                    character.velocity.y = 0;
                } else {
                    character.velocity.y -= 25;
                }
                checkJump = false;
                window.setTimeout(function () {checkJump = true}, 550);

            }
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
            break;
        case 39:
            console.log("right")
            keys.right.pressed = false;
            character.currentSprite = character.sprite.stand.right;
            character.currentCropWidth = character.sprite.stand.cropWidth;
            character.width = character.sprite.stand.width;
            this.currentCropHeight = 400;
            break;
        case 37:
            console.log("left")
            keys.left.pressed = false;
            character.currentSprite = character.sprite.stand.left;
            character.currentCropWidth = character.sprite.stand.cropWidth;
            character.width = character.sprite.stand.width;
            this.currentCropHeight = 400;
            break;
        case 40:
            console.log("Down")
            break;
    }
})