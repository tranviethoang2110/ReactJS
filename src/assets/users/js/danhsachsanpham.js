 // Lấy thông tin sản phẩm

// function viewProductDetails() {
//     var productName = document.querySelector('.boxpro .ten').innerText;
//     var productPrice = document.querySelector('.boxpro strong').innerText;
//     var productImage = document.querySelector('.boximg img').src;
//     // Lưu thông tin sản phẩm vào Local Storage
//     var productInfo = {
//         name: productName,
//         price: productPrice,
//         img: productImage
//     };
//     console.log(productInfo)
//     localStorage.setItem('detail', JSON.stringify(productInfo));
//     window.location.href = "chitietsanpham.html";
// }

var muahang=document.querySelectorAll('.ten')
muahang.forEach(function(item){
   item.addEventListener("click",function(e){  
       var itemX = e.target
       var item = itemX.parentElement
       var img = item.querySelector('.boximg img').src
       var name = item.querySelector('.ten').innerHTML
       var price = item.querySelector('strong').innerHTML
       productItem(img,name,price)
       console.log(price)
   })
})
function productItem(img, name, price) {
    var productInfo = {
        name: name,
        price: price,
        img: img
    };
    console.log(productInfo)
    localStorage.setItem('test1', JSON.stringify(productInfo));
    window.location.href = "detail";
}

