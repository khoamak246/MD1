
// let arr4 = [0, 0, 0, 0, 0, 0];

function minArray(arr) {
    if(arr.length === 0)
        return "No Item In Array";
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

// let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let min = minArray(arr1);
// alert(min);

// let arr2 = [7, 12, 6, 9, 20, 56, 89];
// let min = minArray(arr2);
// alert(min);

let arr3 = [];
let min = minArray(arr3);
alert(min);

// let arr4 = [0, 0, 0, 0, 0, 0];
// let min = minArray(arr4);
// alert(min);