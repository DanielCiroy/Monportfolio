

let toggleBtn=document.querySelector('.toggle-btn')
let toggleBtnIcone=document.querySelector('.toggle-btn i')
let dropDownMenu=document.querySelector('.dropdown')

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    let isOpen=dropDownMenu.classList.contains('open')

    toggleBtnIcone.classList=isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}