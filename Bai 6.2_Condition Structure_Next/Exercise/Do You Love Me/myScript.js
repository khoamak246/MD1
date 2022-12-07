
function disableHover() {
    let NO_option = document.getElementById('no');
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    NO_option.style.left = x + "px";
    NO_option.style.top = y + "px";
}

function openModal() {
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}