import Swal from 'sweetalert2';
function renderproduct(){
    var listItem = localStorage.getItem("listSP") ? JSON.parse(localStorage.getItem("listSP")) : [];
    var html='';
    listItem.map(function(item,index){
        return html+=`<tr>
        <td class="anhct"><img src="${item.img}" alt=""></td>
        <td class="tenct"><p>${item.name}</p></td>
        <td><div class="tanggiamsl">
        <button onclick="giamsl(${index})">-</button>
        <input class="slct" id="quantityInput${index}" type="number" value="${item.sl}" min="1">
        <button onclick="tangsl(${index})">+</button>
        </div></td>
        <td class="price">${item.price} </td>
        <td ><span onclick="deleteProduct(this)" class="xoa">X</span></td>
        </tr>
        `
    })
    
    var body = document.querySelector('tbody')
    body.innerHTML = html
    tongtien()
}
renderproduct()


function tongtien() {
    var listItemBuy = localStorage.getItem('listSP') ? JSON.parse(localStorage.getItem('listSP')) : [];
    var total = 0;

    listItemBuy.forEach(function (product) {
        var gia = product.price;
        var sl = product.sl;
        total += sl * gia*1000; // Assuming 'price' is a numeric value
        
    });
    
   document.querySelector('.total-span').innerHTML=total;
    
}
function slgh()
{
    var listItemBuy = localStorage.getItem('listSP') ? JSON.parse(localStorage.getItem('listSP')) : [];
    document.getElementById('tongSoLuongTd').innerText=listItemBuy.length
}

slgh()




function deleteProduct(element) {
    Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không'
    }).then((result) => {
        if (result.isConfirmed) {
            // Lấy phần tử <tr> cha của thẻ <span>
            var row = element.parentNode.parentNode;
            // Lấy chỉ mục hàng (index) của thẻ <tr> trong bảng
            var rowIndex = row.rowIndex - 1;

            var listItemBuy = localStorage.getItem('listSP') ? JSON.parse(localStorage.getItem('listSP')) : [];
            listItemBuy.splice(rowIndex, 1); // Sửa đổi ở đây
            localStorage.setItem('listSP', JSON.stringify(listItemBuy));
            renderproduct(); // Re-render the product list
            tongtien()
            slgh()
        }
    });
}




function tangsl(index) {
    var listProductLocal = localStorage.getItem('listSP') ? JSON.parse(localStorage.getItem('listSP')) : [];
    var sl = listProductLocal[index].sl;

    sl++;

    listProductLocal[index].sl = sl;
    localStorage.setItem('listSP', JSON.stringify(listProductLocal));
    renderproduct();
    tongtien();
}

function giamsl(index) {
    var listProductLocal = localStorage.getItem('listSP') ? JSON.parse(localStorage.getItem('listSP')) : [];
    var sl = listProductLocal[index].sl;

    if (sl > 1) {
        sl--;
    }

    listProductLocal[index].sl = sl;
    localStorage.setItem('listSP', JSON.stringify(listProductLocal));
    renderproduct();
    tongtien();
}

function tieptucmuasam(){
    window.location.href = "trangchu2";
}

// function deleteSP(){
//     var cartItem=document.querySelectorAll("tbody tr")
//     for(var i=0;i<cartItem.length;i++){
//         var productT=document.querySelectorAll(".cart-delete")
//         productT[i].addEventListener("click",function(event){
//             var cartDelete=event.target
//             var cartItem1=cartDelete.parentElement.parentElement
//             cartItem1.remove()
//         })
//     }
    
//    // Xử lý event update số lượng sản phẩm
// // }
// var muahang=document.querySelectorAll('.thanhtoan')
// console.log(muahang)
// muahang.forEach(function(item){
//    item.addEventListener("click",function(e){  
//        var itemX = e.target
//        var item = itemX.parentElement.parentElement.parentElement.parentElement
//        var img = item.querySelector('.anhct img').src
//        var name = item.querySelector('.tenct p').innerHTML
//        var price = item.querySelector('.price ').innerHTML
//        var sl=item.querySelector('.slct ').value
//        thanhtoanproduct(img,name,price,sl)
//        console.log(img,name,price,sl)
//    })
// })
// function thanhtoanproduct(img, name, price,sl) {
//    try {
//      var listItem = localStorage.getItem("thanhtoanSP") ? JSON.parse(localStorage.getItem("thanhtoanSP")) : [];
     
//      listItem.push({
//        img: img,
//        name: name,
//        price: price,
//        sl:sl,
//        amount: 1
//      });
//      localStorage.setItem("thanhtoanSP", JSON.stringify(listItem));
//      window.location.href = "pay.html";
     
//    } catch (error) {
//      console.log("Error saving product:", error);
//    }
//  }
function thanhtoan(){
    window.location.href="pay";
}
