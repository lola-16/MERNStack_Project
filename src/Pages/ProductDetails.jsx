// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, ButtonGroup, Spinner, Alert } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; 
import './Css/ProductDetails.css';
import ShoeCard from '../components/ShoeCard';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams(); // Extract the product ID from the URL
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [relatedLoading, setRelatedLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedError, setRelatedError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`http://localhost:8080/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Failed to load product details.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            if (!product) return;

            try {
                setRelatedLoading(true);
                setRelatedError(null);
                // Assuming related products are in the same category
                const response = await axios.get(`http://localhost:8080/api/products/category/${product.category}`);
                setRelatedProducts(response.data);
            } catch (err) {
                console.error('Error fetching related products:', err);
                setRelatedError('Failed to load related products.');
            } finally {
                setRelatedLoading(false);
            }
        };

        fetchRelatedProducts();
    }, [product]);

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">{error}</Alert>
                <Link to="/" className="btn btn-primary">Go Back</Link>
            </Container>
        );
    }

    if (!product) {
        return (
            <Container className="mt-5">
                <Alert variant="warning">Product not found.</Alert>
                <Link to="/" className="btn btn-primary">Go Back</Link>
            </Container>
        );
    }

    return (
        <Container fluid className="mt-3">
            <Row className="text-center desc h-100 g-2">
                <Col xs={12} md={6}>
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </Col>
                <Col xs={12} md={6}>
                    <h1 className='mb-5'>{product.name}</h1>
                    <p style={{fontSize:30}} className='mb-3'>{product.price} جنيها {product.deletedPrice && <del>{product.deletedPrice} جنيها</del>}</p>
                    <h2>الاحجام المتاحة</h2>
                    <div className='sizes'>
                        {/* Dynamically render sizes if available */}
                        {product.sizes && product.sizes.map((size, index) => (
                            <span key={index} className="size">{size}</span>
                        ))}
                    </div>
                    <Row className="text-center cart">
                        <Col xs={7}>
                            <Button className="car-btn w-100">اضافة لعربة التسوق</Button>
                        </Col>
                        <Col xs={5}>
                            <ButtonGroup className='ButtonGroup'>
                                <Button className="cc" variant="secondary">+</Button>
                                <Button className="cc" variant="secondary">0</Button>
                                <Button className="cc" variant="secondary">-</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <div className="rate m-2">
                        {/* Assuming product.rating exists and is between 0-5 */}
                        {Array.from({ length: 5 }, (_, index) => (
                            <FaStar key={index} color={index < (product.rating || 0) ? "#ffc107" : "#e4e5e9"} />
                        ))}
                    </div>
                    <Row className="text-center d-flex justify-content-center align-items-center g-3">
                        <Col xs={6} md={4}>
                            <div className="card-detail">
                                <i className="fa-solid fa-medal" />
                                <h3>جودة عالية</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="card-detail">
                                <i className="fa-solid fa-truck-fast" />
                                <h3>شحن سريع</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="card-detail">
                                <i className="fa-solid fa-share-from-square" />
                                <h3>استبدال سهل</h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="description text-end mt-4">
                <h2>الوصف</h2>
                <hr />
                <p>
                    {product.description}
                </p>
            </div>
            <div className="related text-end mt-4">
                <h2>العناصر المشابهة</h2>
                <hr />
                {relatedLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : relatedError ? (
                    <p className="text-danger">{relatedError}</p>
                ) : relatedProducts.length > 0 ? (
                    <Row className="row" id="product-list">
                        {relatedProducts.map((sock) => (
                            <ShoeCard
                                key={sock._id}
                                id={sock._id} // Pass id prop if needed
                                image={sock.image}
                                name={sock.name}
                                deletedPrice={sock.deletedPrice}
                                currentPrice={sock.price}
                            />
                        ))}
                    </Row>
                ) : (
                    <p>لا توجد عناصر مشابهة.</p>
                )}
            </div>
        </Container>
    );
};

export default ProductDetails;
