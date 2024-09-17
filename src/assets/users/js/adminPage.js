const menu=document.querySelectorAll('.admin-sidebar-content >ul >li>a')
for(let i=0;i<menu.length;i++){
    menu[i].addEventListener('click',function(e){
        e.preventDefault()
        menu[i].parentNode.querySelector('ul').classList.toggle('active')
    })
}

  