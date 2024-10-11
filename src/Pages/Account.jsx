// Account.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Css/Account.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Rtk/Slices/Auth'; // Adjust the path based on your project structure

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Accessing user data from Redux store
  const user = useSelector((state) => state.auth.user);
  
  // Logout handler
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login', { replace: true }); // Redirect to the login page
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
          <div className="sidebar">
            <div className="user-info mb-4">
              <div className="d-flex align-items-center">
                <div className="ms-2">
                  {/* Dynamically display the username */}
                  <strong>{user?.username || 'User'}</strong>
                </div>
              </div>
            </div>
            <h5 className="mb-4">لوحة التحكم</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/account/orders">الطلبات</Nav.Link>
              <Nav.Link as={Link} to="/account/address">العنوان</Nav.Link>
              <Nav.Link as={Link} to="/account/account-details">تفاصيل الحساب</Nav.Link>
              {/* Implement logout functionality */}
              <Nav.Link onClick={handleLogout}>تسجيل الخروج</Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col md={9}>
          <div className="content">
            <p className="user-welcome">
              مرحبًا {user?.username || 'User'} (لست {user?.username || 'User'}؟{' '}
              {/* Implement logout functionality */}
              <Nav.Link onClick={handleLogout} className="d-inline">تسجيل الخروج</Nav.Link>)
            </p>
            <p>
              من خلال لوحة تحكم الحساب الخاص بك، يمكنك استعراض{' '}
              <Nav.Link href="#" className="d-inline">أحدث الطلبات</Nav.Link>، إدارة{' '}
              <Nav.Link href="#" className="d-inline">عناوين الشحن والفواتير</Nav.Link> الخاصة بك، بالإضافة إلى{' '}
              <Nav.Link href="#" className="d-inline">تعديل كلمة المرور وتفاصيل حسابك</Nav.Link>.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
