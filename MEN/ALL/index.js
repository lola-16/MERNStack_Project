const products = [
    { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 120, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 90, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 80, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 96, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 40, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 130, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 70, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 50, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 30, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 120, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 90, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 100, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 110, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 90, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 78, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 99.5, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 140, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 55, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 60, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 44, discount: 34, img: "img3.jpg" },
    { name: "مجموعة 3 شرابات", price: 80, discount: 52, img: "img1.jpg" },
    { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img2.jpg" },
    { name: "مجموعة 6 شرابات", price: 112, discount: 34, img: "img3.jpg" },
    
];

function displayProducts(productList) {
    const productListDiv = document.getElementById("product-list");
    productListDiv.innerHTML = ""; // Clear existing products

    productList.forEach(product => {
        const discountedPrice = product.price - (product.price * (product.discount / 100));

        const productCard = `
            <div class="col-md-4">
                <div class="product-card">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="original-price">جنيه ${product.price.toFixed(2)}</p>
                    <p class="discounted-price">جنيه ${discountedPrice.toFixed(2)}</p>
                    <button class="btn btn-primary">إضافة إلى السلة</button>
                </div>
            </div>
        `;
        productListDiv.innerHTML += productCard;
    });
}

function sortProducts() {
    const sortValue = document.getElementById("sort").value;
    let sortedProducts;

    if (sortValue === "priceLowToHigh") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sortValue === "priceHighToLow") {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else {
        sortedProducts = products; // Default or other sorting logic can be added here
    }

    displayProducts(sortedProducts);
}

// Initial display of products
displayProducts(products);