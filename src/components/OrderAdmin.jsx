import React, { useState } from 'react';

const OrderAdmin = () => {
    const [orders, setOrders] = useState([
        { id: 1, user: 'John Doe', product: 'Smartphone', quantity: 1, date: '2024-04-10' },
        { id: 2, user: 'Jane Smith', product: 'Laptop', quantity: 1, date: '2024-04-11' },
        { id: 3, user: 'Mark Johnson', product: 'Tablet', quantity: 2, date: '2024-04-12' },
    ]);

    return (
        <div>
            <h1>الطلبات</h1>
            <table>
                <thead>
                    <tr>
                        <th>رقم الطلب</th>
                        <th>اسم المستخدم</th>
                        <th>الطلب</th>
                        <th>الكمية</th>
                        <th>السعر</th>
                        <th>تاريخ الطلب</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.user}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td> 
                            <td>{order.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderAdmin;
