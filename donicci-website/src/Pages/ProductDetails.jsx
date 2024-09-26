import React from 'react';
import { Breadcrumb, Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import './ProductDetails.css'; 
export default function ProductDetails() {
    return (
        <>
            <Container fluid className="d-flex justify-content-end align-items-start">
                <Breadcrumb>
                    <Breadcrumb.Item active>1B Beige</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">المتجر</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">أحذية رجالي</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">الرئيسية</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container fluid>
                <Row className="text-center desc h-100">
                    <Col xs={12} md={6}>
                        <img src="./Photos/img8.jpeg" alt="Product" className="img-fluid" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>1B Beige</h1>
                        <p>399.9EP <del>500EP</del></p>
                        <h2>الاحجام المتاحة</h2>
                        <div>
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
                            <span className="star"><i className="fa-solid fa-star" /></span>
                            <span className="star"><i className="fa-solid fa-star" /></span>
                            <span className="star"><i className="fa-solid fa-star" /></span>
                            <span className="star"><i className="fa-solid fa-star" /></span>
                        </div>

                        <Row className="text-center d-flex justify-content-center align-items-center">
                            <Col xs={4} className="card-datail m-4">
                                <i className="fa-solid fa-medal" />
                                <h3>جودة عالية</h3>
                            </Col>
                            <Col xs={4} className="card-datail m-4">
                                <i className="fa-solid fa-truck-fast" />
                                <h3>شحن سريع</h3>
                            </Col>
                            <Col xs={4} className="card-datail m-4">
                                <i className="fa-solid fa-share-from-square" />
                                <h3>استبدال سهل</h3>
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
                </div>
            </Container>
        </>
    );
}
