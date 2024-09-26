import React, { useState } from "react";
import './ChildSocks.css'
const ChildSocks= () => {
    const productsData = [
        { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 120, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 90, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 80, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 96, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 40, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 130, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 70, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 50, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 30, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 120, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 90, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 100, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 45, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 110, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 90, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 78, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 99.5, discount: 50, img: "img1.jpg"},
        { name: "مجموعة 6 شرابات", price: 140, discount: 34, img: "img1.jpg"},
        { name: "مجموعة 3 شرابات", price: 55, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 60, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 44, discount: 34, img: "img1.jpg" },
        { name: "مجموعة 3 شرابات", price: 80, discount: 52, img: "img1.jpg" },
        { name: "مجموعة 5 شرابات", price: 75, discount: 50, img: "img1.jpg" },
        { name: "مجموعة 6 شرابات", price: 112, discount: 34, img: "img1.jpg" },
    ];

    const [products, setProducts] = useState(productsData);

    const sortProducts = (sortValue) => {
        let sortedProducts;
        if (sortValue === "priceLowToHigh") {
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        } else if (sortValue === "priceHighToLow") {
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
        } else {
            sortedProducts = productsData; 
        }
        setProducts(sortedProducts);
    };

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="sort" className="form-label">الترتيب الافتراضي</label>
                    <select
                        id="sort"
                        className="form-select"
                        onChange={(e) => sortProducts(e.target.value)}
                    >
                        <option value="default">الترتيب الافتراضي</option>
                        <option value="priceLowToHigh">ترتيب حسب: الأقل سعراً</option>
                        <option value="priceHighToLow">ترتيب حسب: الأعلى سعراً</option>
                    </select>
                </div>
            </div>

            <div className="row" id="product-list">
                {products.map((product, index) => {
                    const discountedPrice = product.price - (product.price * (product.discount / 100));
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="product-card">
                                <img src={product.img} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="original-price">جنيه {product.price.toFixed(2)}</p>
                                <p className="discounted-price">جنيه {discountedPrice.toFixed(2)}</p>
                                <button className="btn btn-primary">إضافة إلى السلة</button>
                            </div>
                        </div>
                    );
                })}
            </div>

          
        </div>
    );
};

export default ChildSocks;
