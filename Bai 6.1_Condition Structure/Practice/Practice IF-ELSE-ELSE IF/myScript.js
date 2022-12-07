function startinput() {
    let USEDNAME = prompt("Who 's there?",'')
    if (USEDNAME == "Admin") {
        let PASSWORD = prompt('Input your password','')
        if (PASSWORD == "The Master") {
            window.alert("Welcome")
        } else if (PASSWORD == null) {
            window.alert('Canceled')
        } else {
            window.alert('Wrong password')
        }
    } else if (USEDNAME == null){
        window.alert('Cancel')
    } else {
        window.alert("I don't know you")
    }
}