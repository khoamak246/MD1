// Display Product
let ProductContainerArray = [];
let GetAddProductName = document.getElementById("AddNewProduct");
let SubmitAddProductButton = document.getElementById("add_btn");
let DisplayProduct = document.getElementById("product_board");
let NumberOfProduct = document.getElementById("number_of_product");
let InputSearchProduct = document.getElementById("search_Product");
let RecommendList = document.getElementById("recommend");
// Add Product
GetAddProductName.addEventListener("keydown",function (keyEvt) {
    if (GetAddProductName.value !== "") {
        if (keyEvt.keyCode === 13) {
            ProductContainerArray.push(GetAddProductName.value);
            display_product_table(ProductContainerArray);
            display_number_of_product(ProductContainerArray.length);
            GetAddProductName.value = "";
        }
    }
})

SubmitAddProductButton.addEventListener("click", function () {
    if (GetAddProductName.value !== "") {
        ProductContainerArray.push(GetAddProductName.value);
        display_product_table(ProductContainerArray);
        display_number_of_product(ProductContainerArray.length);
        GetAddProductName.value = "";
    }
})

// Search Product
InputSearchProduct.addEventListener("input",function () {
    let RecommendDisplay = "";
    for (let i = 0; i < ProductContainerArray.length; i++) {
        if (ProductContainerArray[i].toLowerCase().includes(InputSearchProduct.value.toLowerCase())) {
            RecommendDisplay = RecommendDisplay + "<div onclick='fill(this.innerHTML)' class='Recommend_Option'>" + ProductContainerArray[i] + "</div>";
        }
    }
    RecommendList.innerHTML = RecommendDisplay;
    if (InputSearchProduct.value === ""){
        RecommendList.innerHTML = "";
        RecommendList.style.display = "none";
        DisplayProduct.style.display = "block";
        document.getElementById("Search_row").style.display = "none";
    }
    if (InputSearchProduct.value.length > 0){
        RecommendList.style.display = "block";
    }
})
function fill(product) {
    InputSearchProduct.value = product;
    RecommendList.style.display = "none";
    RecommendList.innerHTML = "";
}

    InputSearchProduct.addEventListener("keydown",function (keyEvt) {
        if (keyEvt.keyCode === 13){
            let TableRowLocation = ProductContainerArray.indexOf(InputSearchProduct.value);
            let result = document.getElementsByTagName("tr").item(TableRowLocation).innerHTML
            console.log(result);
            document.getElementById("Search_row").style.display = "block";
            document.getElementById("Search_row").innerHTML = "<table>" + "<tr>" + result + "</tr>" +"</table>"
            DisplayProduct.style.display = "none";

        }
    })




// Display Table
function display_product_table(array) {
    let Display = "";
    Display += "<table>"
    for (let i = 0; i < array.length; i++) {
        Display = Display
            + "<tr>"
            + "<td>" + (i + 1) + "</td>"
            + "<td>" + array[i] + "</td>"
            + "<td>" + "<button class='Btn' onclick='edit_item(this)'>" + "Edit" + "</button>" + "</td>"
            + "<td>" + "<button class='Btn' onclick='delete_item_array(this)'>" + "Delete" +"</button>" + "</td>"
            + "</tr>"
    }
    Display += "</table>"
    DisplayProduct.innerHTML = Display;
}

//Display number of product
function display_number_of_product(NumberProduct) {
    NumberOfProduct.innerHTML = NumberProduct + " Products"
}

//Edit Button Event
function edit_item(item){
    let Confirm = confirm('Ban co chac muon thay doi noi dung dong nay chu?');
    if (Confirm) {
        let ChangeValue = prompt('Xin nhap noi dung: ', '');
        let EditArrayItemIndex = item.parentNode.parentNode.rowIndex;
        ProductContainerArray[EditArrayItemIndex] = ChangeValue;
        item.parentNode.parentNode.children.item(1).innerHTML = ChangeValue;
        console.log(ProductContainerArray);
    }
}

//Delete Button Event
function delete_item_array(row) {
    let Confirm = confirm("Ban co chac muon xoa san pham nay chu?");
    if (Confirm){
        let DeleteArrayItemIndex = row.parentNode.parentNode.rowIndex;
        ProductContainerArray.splice(DeleteArrayItemIndex, 1);
        document.querySelector("table").deleteRow(DeleteArrayItemIndex);
        display_number_of_product(ProductContainerArray.length);
    }
}
