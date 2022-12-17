let InputBoxValue = document.getElementById("input_box");
let InputBtn = document.getElementById("add_product_btn");
let DisplayTableArea = document.getElementById("display_table_area");
let NumberProduct = document.getElementById("number_product_label_item");
let InputSearchBox = document.getElementById('input_search_box');
let InputSearchBtn = document.getElementById("search_btn");
let ProductArr = [];
let list_search_recommend = [];

InputBtn.addEventListener("click",function () {
    ProductArr.push(InputBoxValue.value);
    InputBoxValue.value = '';
    display_product_table(ProductArr);
})
InputBoxValue.addEventListener("keydown", function (KeyEvt) {
    if (KeyEvt.keyCode === 13) {
        ProductArr.push(InputBoxValue.value);
        InputBoxValue.value = '';
        display_product_table(ProductArr);
    }
})

function display_product_table(arr) {
    let DisplayTable = '';
    if (arr.length !== 0) {
         DisplayTable = `<table>
                            <tr>
                                <th>STT</th>
                                <th>Product Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>`;
    }
    for (let i = 0; i < arr.length; i++) {
            DisplayTable = DisplayTable + `<tr>
                                                <td> ${i+1} </td>
                                                <td> ${arr[i]} </td>
                                                <td> <button id="${i}" onclick="edit_product(${i})" class="btn_style"> Edit </button> </td>
                                                <td> <button id="${i}" onclick="delete_product(${i})" class="btn_style"> Delete </button></td>
                                            </tr>`
    }
    DisplayTable += "</table>";
    DisplayTableArea.innerHTML = DisplayTable;
    NumberProduct.innerHTML = arr.length + " Products"
}

function delete_product(id) {
    let Confirm = confirm("Ban co chac muon xoa khong?")
    if (Confirm) {
        ProductArr.splice(id, 1);
        display_product_table(ProductArr);
    }
}
function edit_product(id) {
    let EditInput = prompt("Nhap noi dung muon thay doi:")
    let Confirm = confirm("Ban co chac muon xoa khong?")
    if (Confirm) {
        ProductArr[id] = EditInput;
        display_product_table(ProductArr);
    }
}

InputSearchBtn.addEventListener("click", function () {
    search_product()
})
InputSearchBox.addEventListener("input", function () {
    if (InputSearchBox.value.trim() === "") {
        display_product_table(ProductArr);
    } else {
        search_product()
    }
})
function search_product() {
    if (InputSearchBox.value.trim() === "") {
        display_product_table(ProductArr);
    } else {
        list_search_recommend = []
        for (let i = 0; i < ProductArr.length; i++) {
            if (ProductArr[i].toLowerCase().search(InputSearchBox.value.toLowerCase()) !== -1){
                console.log(ProductArr[i].toLowerCase().search(InputSearchBox.value.toLowerCase()))
                list_search_recommend.push(ProductArr[i]);
            }
        }
    }
    display_product_table(list_search_recommend);
}