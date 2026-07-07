const products=[{name:'iPhone 16 Pro',price:45000,image:'images/iphone.jpg'}];
let c=0;
const p=document.getElementById('products');
products.forEach(x=>p.innerHTML+=`<div class="product"><img src="${x.image}"><h3>${x.name}</h3><p>${x.price} جنيه</p><button onclick="document.getElementById('cart-count').innerText=++c">أضف للسلة</button></div>`);