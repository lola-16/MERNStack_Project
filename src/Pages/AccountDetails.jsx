import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AccountDetails() {
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
                            <Nav.Link as={Link} to="/Account/Address">العنوان</Nav.Link>
                            <Nav.Link as={Link} to="/Account/AccountDetails" style={{color:"blue"}}>تفاصيل الحساب</Nav.Link>
                            <Nav.Link href="#">تسجيل الخروج</Nav.Link>
                        </Nav>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="content">
                        <h2>تفاصيل الحساب</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">الاسم الكامل <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">البريد الإلكتروني <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">كلمة المرور  القديمة<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="password" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">كلمة المرور الجديدة<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary">تحديث الحساب</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
