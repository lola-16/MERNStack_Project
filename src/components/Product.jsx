import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Product.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';  // Import SweetAlert2

const Products = () => {
    const initialFormState = {
        name: '',
        price: '',
        deletedPrice: '',
        image: null,
        stock: '',
        description: '',
        category: '',
    };

    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState(initialFormState);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/products', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProducts(response.data);
            } catch (err) {
                setError('Failed to fetch products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductForm({ ...productForm, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductForm({ ...productForm, image: file });
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
    
        // Basic validation to ensure the required fields are filled
        if (!productForm.name || !productForm.price || !productForm.stock || !productForm.deletedPrice) {
            Swal.fire('Error', 'All required fields must be filled.', 'error');
            return;
        }
    
        const formData = new FormData();
        
        // Append form data fields, including required ones
        formData.append('name', productForm.name);
        formData.append('price', parseFloat(productForm.price));  // Ensure price is a float
        formData.append('deletedPrice', parseFloat(productForm.deletedPrice)); // Add deletedPrice here
        formData.append('stock', parseInt(productForm.stock));    // Ensure stock is an integer
        formData.append('description', productForm.description);
        formData.append('category', productForm.category);
        formData.append('newPrice', parseFloat(productForm.price)); // Add newPrice here
    
        // Uncomment this line to include image again
        if (productForm.image) {
            formData.append('image', productForm.image);
        }
    
        // Log formData content for debugging
        formData.forEach((value, key) => {
            console.log(key, value);
        });
    
        setSubmitting(true);
    
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/api/products', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            setProducts([...products, response.data]);
            setProductForm(initialFormState);
            document.getElementById('image').value = '';  // Reset the image input field
    
            Swal.fire('Success', 'Product added successfully!', 'success');
        } catch (err) {
            if (err.response) {
                console.error('Error response:', err.response.data);
                Swal.fire('Error', `Failed to add product: ${err.response.data.error || 'Server error'}`, 'error');
            } else {
                console.error('Error:', err);
                Swal.fire('Error', 'An unexpected error occurred', 'error');
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleEditProduct = (product) => {
        setIsEditing(true);
        setCurrentProductId(product._id);
        setProductForm({
            name: product.name,
            price: product.price,
            deletedPrice: product.deletedPrice,
            image: null,
            stock: product.stock,
            description: product.description,
            category: product.category,
        });
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        if (!productForm.name || !productForm.price || !productForm.stock) {
            Swal.fire('Error', 'All required fields must be filled.', 'error');
            return;
        }

        const formData = new FormData();
        Object.entries(productForm).forEach(([key, value]) => {
            formData.append(key, value);
        });

        setSubmitting(true);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:8080/api/products/${currentProductId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setProducts(products.map(prod => (prod._id === currentProductId ? response.data : prod)));
            setIsEditing(false);
            setCurrentProductId(null);
            setProductForm(initialFormState);
            document.getElementById('image').value = '';

            Swal.fire('Success', 'Product updated successfully!', 'success');
        } catch (err) {
            Swal.fire('Error', 'Failed to update product', 'error');
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteProduct = async (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');
                    await axios.delete(`http://localhost:8080/api/products/${productId}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setProducts(products.filter(prod => prod._id !== productId));

                    Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
                } catch (err) {
                    Swal.fire('Error', 'Failed to delete product', 'error');
                    console.error(err);
                }
            }
        });
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        return words.length > 2 ? `${words.slice(0, 2).join(' ')}...` : description;
    };

    // Filter products based on the search term
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    return (
        <div className="container">
            <h1 className='text-center mb-5'>ادارة المنتجات</h1>
            <input
                type="text"
                placeholder="ابحث عن منتج..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input mb-5" // Optional styling class
            />
            <h2 className='text-center mb-3'>اضف منتج جديد </h2>
            <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct} className="product-form">
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
                    <label htmlFor="price">السعر:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={productForm.price}
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
                <div className="form-group">
                    <label htmlFor="image">صورة المنتج:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required={!isEditing}
                    />
                </div>

                <button type="submit" disabled={submitting}>
                    {isEditing ? 'تعديل المنتج' : 'اضافة منتج'}
                </button>
                {isEditing && (
                    <button type="button" onClick={() => { setIsEditing(false); setProductForm(initialFormState); }}>
                        الغاء
                    </button>
                )}
            </form>

            <h2>المنتجات</h2>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{truncateDescription(product.description)}</p>
                        <div className="product-actions">
                            <button className="edit-btn" onClick={() => handleEditProduct(product)}>تعديل</button>
                            <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>حذف</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
