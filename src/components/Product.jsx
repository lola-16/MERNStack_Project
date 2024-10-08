// src/components/Products.js
import React, { useState } from 'react';
import './css/Product.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Products = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Smartphone',
            newPrice: 699,
            deletedPrice: 799,
            image: '/images/2pairs Butterfly Pattern Crew Socks.jpeg',
            offer: '10% off',
            rate: 4.5,
            stock: 20,
            description: 'A high-end smartphone with excellent performance and display quality.',
            category: 1,
        },
    ]);

    const initialFormState = {
        name: '',
        newPrice: '',
        deletedPrice: '',
        image: null,
        offer: '',
        rate: '',
        stock: '',
        description: '',
        category: '',
    };

    const [productForm, setProductForm] = useState(initialFormState);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductForm({ ...productForm, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductForm({ ...productForm, image: URL.createObjectURL(file) });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (productForm.name.trim() === '') return;
        const newId = products.length ? products[products.length - 1].id + 1 : 1;
        setProducts([...products, { id: newId, ...productForm }]);
        setProductForm(initialFormState);
    };

    const handleEditProduct = (product) => {
        setIsEditing(true);
        setCurrentProductId(product.id);
        setProductForm(product);
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        setProducts(products.map(prod => prod.id === currentProductId ? { id: currentProductId, ...productForm } : prod));
        setIsEditing(false);
        setCurrentProductId(null);
        setProductForm(initialFormState);
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(prod => prod.id !== id));
        }
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        return words.length > 2 ? `${words.slice(0, 2).join(' ')}...` : description;
    };

    return (
        <div className='cont'>
            <h1>ادارة المنتجات</h1>
            <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct}>
                {/* Form fields */}
                <div className="form-group">
                    <label htmlFor="name">اسم المنتج:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={productForm.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPrice">السعر الجديد:</label>
                    <input
                        type="number"
                        id="newPrice"
                        name="newPrice"
                        value={productForm.newPrice}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="deletedPrice">السعر القديم:</label>
                    <input
                        type="number"
                        id="deletedPrice"
                        name="deletedPrice"
                        value={productForm.deletedPrice}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">صورة المنتج:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="offer">العرض:</label>
                    <input
                        type="text"
                        id="offer"
                        name="offer"
                        value={productForm.offer}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rate">تقييم العملاء:</label>
                    <input
                        type="number"
                        step="0.1"
                        id="rate"
                        name="rate"
                        value={productForm.rate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">المخزون:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={productForm.stock}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">الوصف:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={productForm.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">رقم الفئة:</label>
                    <input
                        type="number"
                        id="category"
                        name="category"
                        value={productForm.category}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">{isEditing ? 'تعديل المنتج' : 'اضافة منتج'}</button>
                {isEditing && <button type="button" onClick={() => { setIsEditing(false); setProductForm(initialFormState); }}>الغاء</button>}
            </form>

            <h1> المنتجات</h1>
            <table className='prod'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>الاسم</th>
                        <th>السعر الحالي</th>
                        <th>السعر القديم</th>
                        <th>الصورة</th>
                        <th>العرض</th>
                        <th>التقييم</th>
                        <th>المخزون</th>
                        <th>الوصف</th>
                        <th>--</th>
                    </tr>
                </thead>
                <tbody className='prod'>
                    {products.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>${prod.newPrice}</td>
                            <td>${prod.deletedPrice}</td>
                            <td className='image-cont'><img src={prod.image} alt={prod.name} /></td>
                            <td>{prod.offer}</td>
                            <td>{prod.rate}</td>
                            <td>{prod.stock}</td>
                            <td>{truncateDescription(prod.description)}</td>
                            <td className="action-buttons">
                                <button onClick={() => handleEditProduct(prod)}>
                                    <i className="fas fa-edit"></i> {/* Edit icon */}
                                </button>
                                <button className="delete" onClick={() => handleDeleteProduct(prod.id)}>
                                    <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
