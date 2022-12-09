function dictionary() {
    let INPUT = ["I", "LOVE", "YOU"];
    let RESULT = ["Toi", "Yeu", 'Ban'];
    let input = document.getElementById('inputWord').value;

    for (let i = 0; i < INPUT.length; i++) {
        if (input.toUpperCase() == INPUT[i]){
            window.alert(RESULT[i]);
        }
    }
}