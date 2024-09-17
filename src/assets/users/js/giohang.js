const btns = document.querySelectorAll("button");

btns.forEach(function (button) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;

        var productImg = product.querySelector(".boxpro img").src;
        var productName = product.querySelector(".ten").innerText;
        var productPrice = product.querySelector("strong").innerText;

        addCart(productImg, productName, productPrice);
    });
});

function addCart(productImg, productName, productPrice) {
    var cartItem = document.createElement("tr");
    var trContent = '<tr><td><img style="width: 70px; display: flex;justify-content: center;" src="' + productImg + '" alt=""></td><td><a class="ten">' + productName + '</a></td><td> <strong >' + productPrice + '</strong></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete" style="cursor: pointer;">Xóa</span></td></tr>';
    cartItem.innerHTML = trContent;

    var cartTable = document.querySelector("tbody");
    cartTable.append(cartItem);

    cartTotal();
    deleteProduct();
    showSuccessMessage();
}

function cartTotal() {
    var cartItems = document.querySelectorAll("tbody tr");
    var total = 0;

    cartItems.forEach(function (item) {
        var inputValue = item.querySelector("input").value;
        var productPrice = item.querySelector("strong").innerHTML;
        total += inputValue * parseFloat(productPrice.replace(/[^\d.-]/g, ''));
    });

    var cartTotalA = document.querySelector(".total p strong");
    cartTotalA.innerHTML = total.toLocaleString('de-DE');

    inputChange();
}

function deleteProduct() {
    var cartItems = document.querySelectorAll("tbody tr");

    cartItems.forEach(function (item) {
        var productDelete = item.querySelector(".cart-delete");

        productDelete.addEventListener("click", function (event) {
            var cartItem = event.target.parentElement.parentElement;
            cartItem.remove();
            cartTotal();
        });
    });
}

function inputChange() {
    var cartItems = document.querySelectorAll("tbody tr");

    cartItems.forEach(function (item) {
        var inputValue = item.querySelector("input");

        inputValue.addEventListener("change", function () {
            deleteProduct();
            cartTotal();
        });
    });
}

const cartShow = document.querySelector(".spc");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector(".closeShopping");

cartShow.addEventListener("click", function () {
    cart.style.display = "block";
});

cartClose.addEventListener("click", function () {
    cart.style.display = "none";
});

function showSuccessMessage() {
    // eslint-disable-next-line no-undef
    Swal.fire({
        icon: 'success',
        title: 'Đã thêm vào giỏ hàng thành công!',
        showConfirmButton: false,
        timer: 1500
    });
}

const purchaseButtons = document.querySelectorAll('button');

purchaseButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        var productElement = e.target.parentElement;
        var img = productElement.querySelector('.boximg img').src;
        var name = productElement.querySelector('.ten').innerHTML;
        var price = productElement.querySelector('strong').innerHTML;

        sendProduct(img, name, price);
    });
});

function sendProduct(img, name, price) {
    try {
        var listItem = localStorage.getItem("listItem") ? JSON.parse(localStorage.getItem("listItem")) : [];

        listItem.push({
            img: img,
            name: name,
            price: price,
            amount: 1
        });
        localStorage.setItem("listItem", JSON.stringify(listItem));
    } catch (error) {
        console.log("Error saving product:", error);
    }
}
