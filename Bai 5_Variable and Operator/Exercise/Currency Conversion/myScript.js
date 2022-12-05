function From_To() {
    if (document.getElementById('from').options[0].selected){
        document.getElementById('to').options[0].selected = true;
    } else {
        document.getElementById('to').options[1].selected = true;
    }
}

function To_From() {
    if (document.getElementById('to').options[0].selected){
        document.getElementById('from').options[0].selected = true;
    } else {
        document.getElementById('from').options[1].selected = true;
    }
}

function doingConvert() {
    let y
    let x = document.getElementById('amount').value;
    if (document.getElementById('from').options[0].selected){
         y = parseInt(x) * 24365
    } else if (document.getElementById('from').options[1].selected){
         y = parseInt(x) / 24365
    }
    document.getElementById('result').innerHTML = "Result: " + y;
}

