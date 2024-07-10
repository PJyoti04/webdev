document.addEventListener('DOMContentLoaded', () => {
    // let dataFetched;
    getData()
    async function getData() {
        let fetchedData = await fetch("https://fakestoreapi.com/products")
        let data1 = await fetchedData.json();
        console.log(data1);


        // dataFetched = getData()
        // console.log(dataFetched);

        let product = JSON.parse(localStorage.getItem("data")) || data1
        // localStorage.setItem("data", JSON.stringify(data1))

        console.log(product);
        // for(let i=0;i<product.length;i++){
        //     let pname=product[i].product_name
        //     let image=product[i].image
        //     let price=product[i].price
        //     // addProductToContainer(pname,image,price)
        //     display(product)
        // }
        display(product)
    }
})



// function addProductToContainer(pname,image,price) {
//     const productDiv = document.createElement('div');
//     productDiv.className = 'product';

//     const productItemDiv = document.createElement('div');
//     productItemDiv.className = 'product-item';

//     const productImgDiv = document.createElement('div');
//     productImgDiv.className = 'product-img';

//     const productImg = document.createElement('img');
//     productImg.src = image;
//     productImg.alt = 'product';

//     productImgDiv.appendChild(productImg);

//     const productDescDiv = document.createElement('div');
//     productDescDiv.className = 'product-desc';
//     productDescDiv.innerText = pname;

//     const priceDiv = document.createElement('div');
//     priceDiv.className = 'price';
//     priceDiv.innerText =price;

//     productItemDiv.appendChild(productImgDiv);
//     productItemDiv.appendChild(productDescDiv);
//     productItemDiv.appendChild(priceDiv);

//     productDiv.appendChild(productItemDiv);
//     const productsContainer = document.querySelector('.main');
//     productsContainer.appendChild(productDiv);

// }
// localStorage.setItem("productInfo", JSON.stringify(productInfo));
let body = document.querySelector("body");
let mainDiv = document.createElement("div");
mainDiv.className = "product"
// mainDiv.style.display = "flex";
// mainDiv.style.flexWrap = "wrap";
// mainDiv.style.border= "1px solid red";
function display(product) {
    mainDiv.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
        let prodDiv = document.createElement("div");
        prodDiv.className = "product-item"
        // prodDiv.style.width = "400px";
        // prodDiv.style.border = "1px solid teal";
        let title = document.createElement("h3");
        title.innerText = product[i].title;
        title.className = "title"
        // title.style.wordWrap = "break-word"  //
        let price = document.createElement("p");
        price.innerText = `Price:$${product[i].price}`;
        price.className = "price"
        let desc = document.createElement("p");
        desc.innerText = product[i].description;
        desc.className = "desc"
        let img = document.createElement("img");
        img.src = product[i].image;
        img.alt = "image"
        img.className = "product-img"
        img.loading = "lazy"
        // img.style.width = "50px";
        let rate = document.createElement("p");
        rate.innerHTML = `Rating<br>${product[i].rating.rate}`;
        rate.className = "rate"
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.id = "cart"
        btn.addEventListener("click", function () {
            addToCart(product[i]);
        });
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.id = "del"
        delBtn.addEventListener("click", function () {
            delData(i, product);
            // window.location.href = "home.html"

        });
        let updBtn = document.createElement("button")
        updBtn.innerText = "Update";
        updBtn.id = "update"
        updBtn.addEventListener("click", function () {
            localStorage.setItem("updInd", JSON.stringify(i));
            window.location.href = "update.html"
        })

        prodDiv.append(img, title, desc, price, rate, btn, delBtn, updBtn);
        mainDiv.append(prodDiv);
    }
    body.append(mainDiv);
}

function delData(ind, product) {
    product.splice(ind, 1);
    if (product.length === 0) {
        localStorage.setItem("data", "null");
        window.location.href="home.html"

    } else {
        if(localStorage.getItem("login") === 'success'){
        localStorage.setItem("data", JSON.stringify(product));
        // display()
        localStorage.setItem("login", "success")
        localStorage.setItem("signin", "success")
        window.location.href="home.html"
        }else{
            alert("Login First")
        }
    }
}