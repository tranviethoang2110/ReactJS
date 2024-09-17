const chinhsachbaoquan=document.querySelector(".chinhsachbaohanh")
const chitiet=document.querySelector(".chitiet")
if(chinhsachbaoquan){
    chinhsachbaoquan.addEventListener('click',function(){
        document.querySelector(".product-bottom-content-title-chitiet").style.display="none"
        document.querySelector(".product-bottom-content-title-chinhsachbaohanh").style.display="block"
    })
}
if(chitiet){
    chitiet.addEventListener('click',function(){
        document.querySelector(".product-bottom-content-title-chitiet").style.display="block"
        document.querySelector(".pproduct-bottom-content-title-chinhsachbaohanh").style.display="none"
    })
}






// const bigImg=document.querySelector(".product-big-img img")
// const smallImg=document.querySelectorAll(".product-small-img img")
// smallImg.forEach(function(imgItem,x){
//     imgItem.addEventListener('click',function(){
//         bigImg.src=imgItem.src
//     })
// })



document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin sản phẩm từ localStorage
    var productInfoString = localStorage.getItem('test1');
    // console.log(productInfoString);
    console.log(productInfoString)
    // Chuyển thông tin từ chuỗi JSON thành đối tượng JavaScript
    var productInfo = JSON.parse(productInfoString);
    // console.log(productInfo)
    // Hiển thị thông tin sản phẩm trong các phần tử tương ứng
    var productImgElement = document.querySelector(".product-big-img img");
    var productNameElement = document.querySelector(".product-content-name h1");
    var productPriceElement = document.querySelector(".product-content-price p");
    console.log(productImgElement)
    // Gắn thông tin vào các phần tử
    productImgElement.src = productInfo.img;  // Fixed the syntax here
    productNameElement.innerHTML = productInfo.name;
    productPriceElement.innerHTML = productInfo.price;
});



var muahang=document.querySelectorAll('.muahang1')
console.log(muahang)
muahang.forEach(function(item){
   item.addEventListener("click",function(e){  
       var itemX = e.target
       var item = itemX.parentElement.parentElement.parentElement.parentElement
       var img = item.querySelector('.product-big-img img').src
       var name = item.querySelector('.product-content-name h1').innerHTML
       var price = item.querySelector('.product-content-price p').innerHTML
       var sl=item.querySelector('.quanttity input').value
       console.log(sl)
       sendproduct(img,name,price,sl)
   })
})
function sendproduct(img, name, price,sl) {
   try {
     var listItem = localStorage.getItem("listSP") ? JSON.parse(localStorage.getItem("listSP")) : [];
     
     listItem.push({
       img: img,
       name: name,
       price: price,
       sl:sl,
       amount: 1
     });
     localStorage.setItem("listSP", JSON.stringify(listItem));
     window.location.href = "cart";
     
   } catch (error) {
     console.log("Error saving product:", error);
   }
 }

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
    window.location.href = "chitietsanpham";
}




