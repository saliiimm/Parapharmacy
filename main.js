
const cartButton =document.querySelector('.shop');
const appear=document.querySelector('.cart-shop');
const modal =document.querySelector('.shoppingcart'); 
const closebutton=document.querySelector('.close');
let cartItems=[];
//to make the shooping-cart appear and disappear
cartButton.addEventListener('click',  ()=>{
  appear.classList.toggle('active');
});
closebutton.addEventListener('click', () => {
   appear.classList.toggle('active');
})
//making addButton functional
const addButtons =document.querySelectorAll('.button');

addButtons.forEach((item) => {
   item.addEventListener('click',(event) => {
      let cartItem = {
         title: event.target.parentNode.parentNode.parentNode.querySelector("h3").innerText,
         price: parseFloat (
            event.target.parentNode.querySelector("h4").innerText.slice(0,-1)
         ),
         quantity:1,
      };
      
   
      if (cartItems.find((e) =>e.title === cartItem.title)) {
         alert("item already in your cart!");
      } else {

         let compteur=document.querySelector('span');
         compteur.innerText=Number(compteur.innerText)+1;
         cartItems.push(cartItem);
         modal.innerHTML += ` <div class="cart-item">
         <h3>${cartItem.title}</h3>
         <p class="price">${cartItem.price}</p>
         <div class="quantity">
             <i class="fa-solid fa-minus"></i>
           <p>${cartItem.quantity}</p>
           <i class="fa-solid fa-plus"></i>
           <i class="fa-solid fa-trash"></i>
         </div>

         <h2>${cartItem.price * cartItem.quantity}$</h2>
     </div>`;


  //plus button      
       const pluses = document.querySelectorAll(".fa-plus");
       pluses.forEach((plus) =>  {
         plus.addEventListener("click", function (event) {
            event.target.parentNode.querySelector("p").innerText =
            parseInt ( event.target.parentNode.querySelector("p").innerText) + 1;
            let total =document.querySelector('.total-cost');
            console.log(total)
            console.log("total", total.innerHTML.slice(0,-1))
            let cost =parseFloat(event.target.parentNode.parentNode.querySelector('.price').innerText)
            console.log("cost", cost)
            total.innerHTML=`${(parseFloat(total.innerHTML.slice(0,-1))+cost).toFixed(2)}$`
            console.log("after",total.innerHTML);
         });
       });

//minus button
       const minuses = document.querySelectorAll(".fa-minus");
       minuses.forEach((plus) =>  {
         plus.addEventListener("click", function (event) {
            if (event.target.parentNode.querySelector("p").innerText > 1) {
            event.target.parentNode.querySelector("p").innerText =
            parseInt ( event.target.parentNode.querySelector("p").innerText) - 1;
            let total =document.querySelector('.total-cost');
            let cost =parseFloat(event.target.parentNode.parentNode.querySelector('.price').innerText)
         

            total.innerHTML=`${(parseFloat(total.innerHTML.slice(0,-1))-cost.toFixed(2)).toFixed(2)}$` 
            }
         });
       });
//total
       let total =document.querySelector('.total-cost');
       let somme =  parseFloat(total.innerHTML.slice(0,-1)) +(cartItem.price.toFixed(2)*cartItem.quantity)
       total.innerHTML=`${somme.toFixed(2)}$`;

//deleting
       const dlts =document.querySelectorAll('.fa-trash');
      dlts.forEach((dlt) =>{
         dlt.addEventListener('click',function(event){
            let compteur=document.querySelector('span');
            compteur.innerText=Number(compteur.innerText)-1;
            console.log('span');
            let total =document.querySelector('.total-cost');
            console.log(event.target.parentNode.querySelector('p'));
            let costs =parseFloat(event.target.parentNode.parentNode.querySelector('.price').innerText)
            let quantity=Number(event.target.parentNode.querySelector('p').innerText)
            total.innerHTML=parseFloat(total.innerHTML.slice(0,-1)-(costs.toFixed(2)*quantity)).toFixed(2)+'$'

            let i=cartItems.indexOf(cartItems.find((e) => e.title === event.target.parentNode.parentNode.querySelector('h3').innerText));
            cartItems.splice(i,1)

            
            event.target.parentNode.parentNode.remove();
         })
      })



      }

   });
});
//buying
let purchasebtn=document.querySelector('.purchase');
purchasebtn.addEventListener('click',function () {
   let compteur=document.querySelector('span');
   compteur.innerText='0';
     elm=this.parentElement.querySelectorAll('.cart-item');

   if (elm.length != 0){
          
      

      for (var s = 0 ; s < (elm.length); s++){
         elm[s].remove();
      let elmtotal=document.querySelector('.total-cost')
         elmtotal.innerHTML=0+'$'
         cartItems = [];}
      setTimeout(function(){alert("thank you for your purchase!")}, 1000)
   }
         else{alert("you need to add a product first")}
})

const shopppingcart =document.querySelector('.shoppingcart');
const acheterbtn =document.querySelector('.purchase');
acheterbtn.addEventListener('click', () => {

} )





















console.log(parseFloat('10.99')+6.99+10.99);