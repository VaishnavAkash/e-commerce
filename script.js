const hamburger= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');

hamburger.addEventListener('click',()=>{
        nav.classList.add('active');
})

close.addEventListener('click',()=>{
    nav.classList.remove('active');
    
})