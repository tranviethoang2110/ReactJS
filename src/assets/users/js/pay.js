function renderproduct(){
    var listItem = localStorage.getItem("listSP") ? JSON.parse(localStorage.getItem("listSP")) : [];
    var html='';
    listItem.map(function(item,index){
        return html+=`<tr>
        <td><div class="product-thumbnail">
            <img src="${item.img}" alt="" srcset="">
            <span>${item.sl}</span>
        </div></td>
        <td>${item.name}</td>
        <td>1</td>
        <td><p>${item.price}</p></td>
        
        </tr>
        
        `
    })
    
    var body = document.querySelector('tbody')
    body.innerHTML = html
    tongtien()
}
renderproduct()
function tongtien() {
    var listItemBuy = localStorage.getItem('thanhtoanSP') ? JSON.parse(localStorage.getItem('thanhtoanSP')) : [];
    var total = 0;

    listItemBuy.forEach(function (product) {
        var gia = product.price;
        var sl = product.sl;
        total += sl * gia*1000; // Assuming 'price' is a numeric value
        
    });
    
   document.querySelector('.tongtien p').innerHTML=total;
   document.querySelector('.tongtienhang p').innerHTM0L=total;
}