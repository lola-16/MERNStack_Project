import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; 
import './Css/ProductDetails.css';
import ShoeCard from '../components/ShoeCard';

export default function ProductDetails() {
    const womenSocks = [
        { name: 'مجموعة 12 شرابات طويل كود 81', deletedPrice: 90, currentPrice: 70 },
        { name: 'مجموعة 8 شرابات قصير كود 82', deletedPrice: 85, currentPrice: 65 },
        { name: 'مجموعة 5 شرابات رياضي كود 83', deletedPrice: 100, currentPrice: 85 }
    ];
    return (
        <>
            <Container fluid>
                <Row className="text-center desc h-100">
                    <Col xs={12} md={6}>
                        <img src="../images/image.jpeg" alt="Product" className="img-fluid" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>1B Beige</h1>
                        <p>399.9EP <del>500EP</del></p>
                        <h2>الاحجام المتاحة</h2>
                        <div className='sizes'>
                            <span className="size">40</span>
                            <span className="size">41</span>
                            <span className="size">42</span>
                            <span className="size">43</span>
                        </div>
                        <Row className="text-center cart">
                            <Col xs={7}>
                                <Button className="car-btn w-100">اضافة لعربة التسوق</Button>
                            </Col>
                            <Col xs={5}>
                                <ButtonGroup>
                                    <Button variant="secondary">+</Button>
                                    <Button variant="secondary">0</Button>
                                    <Button variant="secondary">-</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <div className="rate m-2">
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStar /></span>
                            <span className="star"><FaStar /></span>
                        </div>
                        <Row className="text-center d-flex justify-content-center align-items-center g-3">
                            <Col xs={6} md={4}>
                                <div className="card-datail">
                                    <i className="fa-solid fa-medal" />
                                    <h3>جودة عالية</h3>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="card-datail">
                                    <i className="fa-solid fa-truck-fast" />
                                    <h3>شحن سريع</h3>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="card-datail">
                                    <i className="fa-solid fa-share-from-square" />
                                    <h3>استبدال سهل</h3>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="description text-end">
                    <h2>الوصف</h2>
                    <hr />
                    <p>
                        -Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repellendus qui, ducimus esse accusantium exercitationem aspernatur sunt, fugit numquam, sapiente eius voluptatibus officia ullam labore corrupti dignissimos laudantium nulla in!
                    </p>
                </div>
                <div className="related text-end">
                    <h2>العناصر المشابهة</h2>
                    <hr />
                    <div className="row" id="product-list">
                        {womenSocks.map((sock, index) => (
                            <ShoeCard key={index} name={sock.name} deletedPrice={sock.deletedPrice} currentPrice={sock.currentPrice} />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}
