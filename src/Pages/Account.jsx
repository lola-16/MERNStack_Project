import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Css/Account.css';
import { Link } from 'react-router-dom';

export default function Account() {
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
            <h5 className="mb-4" as={Link} to="/Account">لوحة التحكم</h5>
            <Nav className="flex-column">
            <Nav.Link as={Link} to="/Account/Orders">الطلبات</Nav.Link>
              <Nav.Link  as={Link} to="/Account/Address">العنوان</Nav.Link>
              <Nav.Link  as={Link} to="/Account/AccountDetails">تفاصيل الحساب</Nav.Link>
              <Nav.Link href="#">تسجيل الخروج</Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col md={9}>
          <div className="content">
            <p className="user-welcome">
              مرحبًا monadewidar02 (لست monadewidar02؟ <Nav.Link href="#" className="d-inline">تسجيل الخروج</Nav.Link>)
            </p>
            <p>
              من خلال لوحة تحكم الحساب الخاص بك، يمكنك استعراض <Nav.Link href="#" className="d-inline">أحدث الطلبات</Nav.Link>، إدارة 
              <Nav.Link href="#" className="d-inline">عناوين الشحن والفواتير</Nav.Link> الخاصة بك، بالإضافة إلى 
              <Nav.Link href="#" className="d-inline">تعديل كلمة المرور وتفاصيل حسابك</Nav.Link>.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
