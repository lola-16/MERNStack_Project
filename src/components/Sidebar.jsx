// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaEdit, FaBoxOpen, FaUsers, FaShoppingCart } from 'react-icons/fa';
import './css/Sidebar.css';
import { Container, Card } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <>
            <Container fluid className='side'>
                <Card className="text-center my-4">
                    <Card.Header>مرحبًا بك في لوحة التحكم</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            استخدم الروابط أدناه للوصول إلى الميزات المختلفة لإدارة التطبيق الخاص بك.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <nav>
                    <h2>لوحة التحكم</h2>
                    <ul>
                        <li>
                            <NavLink to="/AdminDashboard/category" className={({ isActive }) => isActive ? 'active' : ''}>
                                <FaEdit className="icon" />
                                تعديل التصنيفات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AdminDashboard/product" className={({ isActive }) => isActive ? 'active' : ''}>
                                <FaBoxOpen className="icon" />
                                تعديل المنتجات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AdminDashboard/user" className={({ isActive }) => isActive ? 'active' : ''}>
                                <FaUsers className="icon" />
                                عرض المستخدمين
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AdminDashboard/sales" className={({ isActive }) => isActive ? 'active' : ''}>
                                <FaShoppingCart className="icon" />
                                المبيعات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AdminDashboard/OrdersAdmin" className={({ isActive }) => isActive ? 'active' : ''}>
                                <span>0</span>
                                الطلبات
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    );
};

export default Sidebar;
