document.addEventListener('DOMContentLoaded', function(){
let products = document.querySelector(".products");
    async function fetchProducts(url){
      let data =  await fetch(url);
      let response = await data.json();


for(let i = 0; i < response.length; i++){
    let description = response[i].description;
    let title = response[i].title;
    let price = response[i].price;
    price  = price * 16;
products.innerHTML += `
       <div class="product">
            <img src="${response[i].image}" alt="" class="product-image">
            <h2 class="product-title">${response[i].title.length > 15 ? title.substring(0, 15).concat('....more') : description}</h2>
           
            <p class="product-category">${response[i].category}</p>
             <p class="product-description">${response[i].description.length > 80 ? description.substring(0, 80).concat('....more') : description}</p>
            <div class="product-price-container">
                <h3 class="product-price"> R${price}</h3>
                <a href="#!" data-procuctId="">Add to cart</a>
            </div>
        </div>`;
}
      
    };
    fetchProducts('https://fakestoreapi.com/products');
})