
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

window.addEventListener("keydown", function ({keyCode}) {
    switch (keyCode) {
        case 38:
            console.log("up")
                character.velocity.y -= 25;
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
            // character.velocity.y -= 20;
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