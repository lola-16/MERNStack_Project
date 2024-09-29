import React, { useState } from 'react';
import { Col, Container, Nav, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Address() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, city, address, phone });
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={3}>
                    <div className="sidebar">
                        <div className="user-info mb-4">
                            <div className="d-flex align-items-center">
                                <div className="ms-2">
                                    <strong>monadewidar02</strong>
                                </div>
                            </div>
                        </div>
                        <Link className="mb-4" as={Link} to="/Account">لوحة التحكم</Link>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/Account/Orders">الطلبات</Nav.Link>
                            <Nav.Link as={Link} to="/Account/Address" style={{ color: "blue" }}>العنوان</Nav.Link>
                            <Nav.Link as={Link} to="/Account/AccountDetails">تفاصيل الحساب</Nav.Link>
                            <Nav.Link href="#">تسجيل الخروج</Nav.Link>
                        </Nav>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="content">
                        <h1 className="mb-4">عنوان الفاتورة</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>الاسم</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="أدخل اسمك"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>المدينة</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="أدخل مدينتك"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>العنوان</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="أدخل عنوانك"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>رقم الهاتف</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="أدخل رقم هاتفك"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                حفظ
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
