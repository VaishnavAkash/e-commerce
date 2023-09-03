const hamburger= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');
const mainImage= document.getElementById('mainImg');
const smallImg = document.querySelectorAll('.small-image');
const product= document.querySelectorAll('.pro');
// opening and closing the menu 

hamburger.addEventListener('click',()=>{
    nav.classList.add('active');   
})

close.addEventListener('click',()=>{
    nav.classList.remove('active');
})

// handling clicking of product in shop page

function handleClickedProduct(e){
    console.log(e);
    mainImage.src= e.target.src;
}

function changeLocation(){
    window.location.pathname='sproduct.html'; 
}
for(let i of smallImg){
   i.addEventListener('click',handleClickedProduct)
}

// handling of opening product details page

product.forEach((eItem)=>{
    eItem.addEventListener('click',changeLocation);
})