const hamburger= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');
const mainImage= document.getElementById('mainImg');
const smallImg = document.querySelectorAll('.small-image');
const idxProContainer= document.getElementById('indexContainer');
const idxProContainer2= document.getElementById('indexContainer2');
const shopProContainer= document.getElementById('shopContainer');
const singlePageContainer= document.getElementById('singlePageContainer');
const smallImagesDiv= document.getElementById('smallImagesDiv');
let cartItemsContainer= document.getElementById('cartItemsContainer');
// opening and closing the menu


// Products data

const data= [
    {
    "id": 1,
    "title": "Men's Stylish Top",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://themodernmen.in/cdn/shop/products/PKWM0011_2_700x_a1c80db2-a58b-4fc6-9c71-6075eaad6eae_700x.webp?v=1676094132",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://media.contra.com/image/upload/c_limit,fl_lossy,w_850/hftvaaoxiwpgws2lcijw",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://i5.walmartimages.com/asr/b277ac73-be27-4ee8-b5ab-796e59b4f20a.2d67642919e472c10329daf19a6145e8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF ",
    "rating": {
    "rate": 4.7,
    "count": 500
    }
    },
    {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://images.meesho.com/images/products/42061173/2ljxn_512.webp",
    "rating": {
    "rate": 2.1,
    "count": 430
    }
    },
    {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://letsbuy24x7.com/wp-content/uploads/2021/05/100-linen-mens-shirts-long-sleeve-slim-fit-fading-dress-shirt-men-quality-social-business-shirts-male-camisa-chemise-ts-547.jpg",
    "rating": {
    "rate": 2.6,
    "count": 235
    }
    },
    {
    "id": 16,
    "title": "Lock and Love Leather Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/61plieY-JwL._AC_UX342_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 340
    }
    },
    {
    "id": 17,
    "title": "Striped Women Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61QZYLYw7BL.jpg",
    "rating": {
    "rate": 3.8,
    "count": 679
    }
    },
    {
    "id": 19,
    "title": "Opna Women's Stylish Hoodie",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://images.meesho.com/images/products/119449285/0lrs9_512.webp",
    "rating": {
    "rate": 4.5,
    "count": 146
    }
    },
    ]


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



for(let i of smallImg){
   i.addEventListener('click',handleClickedProduct)
}

// handling of opening product details page

function shuffleData(array){
        for (let i = array.length - 1; i > 0; i--) {
          // Generate a random index between 0 and i (inclusive)
          const j = Math.floor(Math.random() * (i + 1));
      
          // Swap array[i] and array[j]
          [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderData(container){
//     data.map((eItem,idx)=>{
//     const tag= document.createElement('div');
//     tag.classList.add('pro');
//     tag.id= eItem.id;
//     tag.innerHTML= `
//     <img src=${eItem.image} alt="">
//     <div class="des">
//         <span>${eItem.category}</span>
//         <h5>${eItem.title}</h5>
//         <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//         </div>
//         <h4>$ ${eItem.price}</h4>
//     </div>
//     <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>`
//     if(container=='home'){
//         idxProContainer.appendChild(tag);
//         idxProContainer2.appendChild(tag);
//     }
//     else if(container=='shop') shopProContainer.appendChild(tag);
// })

if(container=='smallImages'){
    shuffleData(data);
    const newArr= data.slice(0,4);
    newArr.map((eItem,idx)=>{
        let innerHTML=  `<div id=${eItem.id} class="small-image-col">
        <img src=${eItem.image} alt=${eItem.id}>
    </div>`
        smallImagesDiv.innerHTML+= innerHTML;
    })
}
else{

    const newItems= data.map((eItem,idx)=>{
        return `<div id=${eItem.id} class='pro'>
        <img src=${eItem.image} alt="">
         <div class="des">
             <span>${eItem.category}</span>
             <h5>${eItem.title}</h5>
             <div class="star">
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
             </div>
           <h4>$ ${eItem.price}</h4>
        </div>
    </div>`
})
    if(container=='home'){
        idxProContainer.innerHTML= newItems;    
        idxProContainer2.innerHTML= newItems; 
    }
    else if(container=='shop') {
        shopProContainer.innerHTML= newItems;   
    }
    else if(container=='singlePage'){
        singlePageContainer.innerHTML= newItems;   
    }
}
}

function removeCartItems(id){
    console.log('im in');
    console.log(id);
    const cartItem= JSON.parse(localStorage.getItem('cartItems'));
    const newItems=cartItem.filter((eI)=>{
        return eI.id!=id;
    })
    localStorage.setItem('cartItems',JSON.stringify(newItems));
    window.location.pathname= 'cart.html';
}
function renderCart(){
    const items= JSON.parse(localStorage.getItem('cartItems'));
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const totalCost= document.getElementById('totalCost');
    const finalCost= document.getElementById('finalCost');
    const shippingCost= document.getElementById('shippingCost')
    const newItems= items.map((eItem,idx)=>{
        return `<tr class='cartItems'>
        <td>
        <i id=${eItem.id} class="far fa-times-circle removeItem"></i>
        </td>
        <td><img src=${eItem.image} alt=""></td>
        <td>${eItem.title}</td>
        <td>${eItem.price}$</td>
        <td><input type="number" value=${eItem.quantity} disabled></td>
        <td>$ ${eItem.subTotal.toFixed(2)}</td>
        </tr>`
    })

    cartItemsContainer.innerHTML= newItems;

    const totalPrice=items.reduce((acc,curr)=>{
            return acc+curr.subTotal;
            },0)
        totalCost.innerText= `$ ${totalPrice.toFixed(2)}`;  
        const shipping= (totalPrice*10)/100;
        shippingCost.innerText= `$ ${shipping.toFixed(2)}`;
        finalCost.innerText=`$ ${(totalPrice+shipping).toFixed(2)}`;
}

function changeLocation(eItem){
    const item= data.filter((i)=>{
        return i.id==eItem.id 
    })
    localStorage.setItem('selectedItem', JSON.stringify(item));
    window.location.pathname='sproduct.html'; 
}




