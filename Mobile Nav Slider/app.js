const openBtn =document.querySelector('.fa-bars');
const closeBtn =document.querySelector('.fa-times');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click',() => {
nav.forEach(item => {
    item.classList.add('show')
})
})
closeBtn.addEventListener('click',() => {
nav.forEach(item => {
    item.classList.remove('show')
})
})

