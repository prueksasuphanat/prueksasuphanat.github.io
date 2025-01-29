//Filter product item
const allFilterItems = document.querySelectorAll('.filter-items .card');
const allFilterBtns = document.querySelectorAll('.filter-btns button');
console.log(allFilterItems,allFilterBtns);

const filtercard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    allFilterItems.forEach(card => {
        card.classList.add("hide");

        
        if (card.classList.contains(e.target.id) && e.target.classList.contains("active")) {
            card.classList.remove("hide");
        }

        

    });
};


allFilterBtns.forEach(button => button.addEventListener("click",filtercard));
console.log("2");


/* Go to Product Detail Card */

function toproductdetail(id) {
    window.location.href = `product_detail.html?id=${id}`;
}


        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
    
        const selectedProduct = products.find(product => product.id === productId);
    
        if (selectedProduct) {
            const productDetailsContainer = document.getElementById('productDetails');
            const productDetailsHTML = `
                <div class ="productDetails">
                    
                    
                    <div class="detail-img">
                        <img src="${selectedProduct.image_1}"> 
                        <img src="${selectedProduct.image_2}"> 

                    </div >
                    <div class="productDetails-info">
                        <h3>${selectedProduct.productName}</h3>
                        <br>
                        <p class="price-detail">${selectedProduct.price}</p>
                        <p><b>Design :</b> ${selectedProduct.Design}</p>
                        <p><b>Material :</b> ${selectedProduct.Material}</p>
                        <p><b>Size :</b> ${selectedProduct.Size}</p>
                        <div class="quantityandcart">
                            <span>
                                <b>Quantity</b>
                            </span>
                            <span>
                                <div id ="quantity">
                                    <div class="quantity">
                                        <span class="minus">-</span>
                                        <span class="num">01</span>
                                        <span class="plus">+</span>
                                    </div>
                                </div>
                            </span>
                                <button type="button" class="btn-buytoCart">Add to cart</button>
                            </span>
                        </div>
                    </div>
                </div>
            `;
            productDetailsContainer.innerHTML = productDetailsHTML;
        } ;
// breadcrambs
const breadcrumbsContainer = document.getElementById('breadcrumbs');
const breadcrumbs = `<a class=" breadcrumb-head link-body-emphasis  text-decoration-none font-weight-light" href="#">${selectedProduct.productName}</a>`;
breadcrumbsContainer.innerHTML = breadcrumbs;



/* quantity */

const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a= 1;

plus.addEventListener("click",() => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);

});

minus.addEventListener("click",() => {
    if(a>1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
    }
});


