import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SocksCard from '../components/SocksCard';
import axios from 'axios';
import './Css/ManSocks.css';

const CategoryPage = () => {
    const { categoryNumber } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryAndProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                if (categoryNumber === 'all') {
                    setCategoryName('الجميع');
                    const response = await axios.get('http://localhost:8080/api/products');
                    setProducts(response.data);
                } else {
                    const categoryResponse = await axios.get(`http://localhost:8080/api/products/category/${categoryNumber}`);
                    if (categoryResponse.status === 200) {
                        setCategoryName(categoryResponse.data.name);
                    } else {
                        setCategoryName('Unknown Category');
                    }
                    const productsResponse = await axios.get(`http://localhost:8080/api/products/category/${categoryNumber}`);
                    setProducts(productsResponse.data);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching category and products:', err);
                setError('An error occurred while fetching data.');
                setLoading(false);
            }
        };

        fetchCategoryAndProducts();
    }, [categoryNumber]);

    return (
        <div className="container">
            <h2 className="my-4">{categoryName}</h2>
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="sort" className="form-label">الترتيب</label>
                    <select
                        id="sort"
                        className="form-select"
                    >
                        <option value="default">الترتيب الافتراضي</option>
                        <option value="priceLowToHigh">ترتيب حسب: الأقل سعراً</option>
                        <option value="priceHighToLow">ترتيب حسب: الأعلى سعراً</option>
                    </select>
                </div>
            </div>
            {loading ? (
                <p>جارٍ التحميل...</p>
            ) : error ? (
                <p className="text-danger">{error}</p>
            ) : products.length > 0 ? (
                <div className="row" id="product-list">
                    {products.map((sock) => (
                        <SocksCard
                            key={sock._id}           // React's key prop for list rendering
                            id={sock._id}            // Pass the ID as a separate prop
                            image={sock.image}
                            name={sock.name}
                            deletedPrice={sock.deletedPrice}
                            currentPrice={sock.price}
                        />
                    ))}
                </div>
            ) : (
                <p>لا توجد منتجات في هذه الفئة.</p>
            )}
        </div>
    );
};

export default CategoryPage;
