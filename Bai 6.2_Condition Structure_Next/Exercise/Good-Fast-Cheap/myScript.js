let GoodValue = document.getElementById('pointGood');
let FastValue = document.getElementById('pointFast');
let CheapValue = document.getElementById('pointCheap');
function ChangeValueGood() {
//     Main
    if (GoodValue.value === "2"){
        FastValue.value = 0;
        CheapValue.value = 0;
    } else if (GoodValue.value === "0"){
        FastValue.value = 1;
        CheapValue.value = 1;
    } else {
        FastValue.value = 0;
        CheapValue.value = 0;
    }
}
function ChangeValueFast() {
    if (FastValue.value === "2") {
        GoodValue.value = 0;
        CheapValue.value = 2;
    } else if (FastValue.value === "0") {
        GoodValue.value = 2;
        CheapValue.value = 0;
    } else if (FastValue.value === "1"){
        CheapValue.value = 1;
        GoodValue.value = 0;
    }
}

function ChangeValueCheap() {
//     Main
    if (CheapValue.value === "2"){
        FastValue.value = 2;
        GoodValue.value = 0;
    } else if (CheapValue.value === "0"){
        FastValue.value = 0;
        GoodValue.value = 2;
    } else {
        FastValue.value = 1;
        GoodValue.value = 0;
    }
}



