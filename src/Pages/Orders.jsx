import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Orders() {
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
                            <Nav.Link as={Link} to="/Account/Orders" style={{color:"blue"}}>الطلبات</Nav.Link>
                            <Nav.Link as={Link} to="/Account/Address">العنوان</Nav.Link>
                            <Nav.Link as={Link} to="/Account/AccountDetails">تفاصيل الحساب</Nav.Link>
                            <Nav.Link href="#">تسجيل الخروج</Nav.Link>
                        </Nav>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="content">
                        <p className="user-welcome">
                            لم يتم تسجيل اي طلبات بعد!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
