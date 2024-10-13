import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/OrderAdmin.css';

const OrderAdmin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/ordersall', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                const ordersData = response.data;
                setOrders(ordersData);
            } catch (err) {
                setError(err.response ? err.response.data.error : 'Failed to fetch orders');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const createSale = async (saleData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/api/sales', saleData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log('Sale created:', response.data); // Ensure that the sale data is correctly logged
        } catch (err) {
            console.error('Error creating sale:', err.response ? err.response.data : err.message);
        }
    };
    

    const confirmOrder = async (orderId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:8080/api/orders/submit/${orderId}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            console.log('Confirm Order Response:', response.data); // Check the response data
    
            // Validate response
            if (!response.data || !response.data.products) {
                throw new Error("Invalid order data received");
            }
    
            const order = response.data; 
            const saleData = {
                orderId: order.orderId,
                name: order.name,
                email: order.email,
                totalAmount: order.totalAmount,
                products: order.products.map(product => ({
                    product: product.product,
                    productName: product.productName,
                    quantity: product.quantity,
                    price: product.price,
                })),
            };
    
            await createSale(saleData);
            
            // Remove the order from the local state
            setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
        } catch (err) {
            console.error('Error confirming order:', err);
            setError(err.response ? err.response.data.error : 'Failed to confirm order');
        }
    };
    
    

    if (loading) {
        return <div>Loading orders...</div>;
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    return (
        <div className="order-container">
            <h1>الطلبات</h1>
            <div className="order-rows">
                {orders.length === 0 ? (
                    <p>لا توجد طلبات لعرضها.</p> 
                ) : (
                    orders.map(order => (
                        <div key={order.orderId} className="order-card">
                            <div className="order-header">
                                <h2>رقم الطلب: {order.orderId}</h2>
                                <p className="order-status">
                                    الحالة: {order.isSubmitted ? 'تم تأكيده' : 'غير مؤكد'}
                                </p>
                            </div>
                            <div className="order-details">
                                <p className='pp'><strong>اسم المستخدم:</strong> {order.name}</p>
                                <p className='pp'><strong>البريد الالكتروني:</strong> {order.email}</p>
                                <p className='pp'><strong>العنوان:</strong> {order.address}</p>
                                <p className='pp'><strong>رقم الهاتف:</strong> {order.phone}</p>
                                <p className='pp'><strong>ملاحظات:</strong> {order.notes || 'لا يوجد'}</p>
                                <p className='pp'><strong>طريقة الدفع:</strong> {order.paymentMethod}</p>
                                <p className='pp'><strong>إجمالي السعر:</strong> {order.totalAmount} ر.س</p>
                                <p className='pp'><strong>شحن:</strong> {order.shipping} ر.س</p>
                                <p className='pp'><strong>تاريخ الطلب:</strong> {new Date(order.orderDate).toLocaleString()}</p>
                            </div>
                            <div className="order-products">
                                <h3>المنتجات:</h3>
                                <ul>
                                    {order.products.map(product => (
                                        <li key={product.productName}>
                                            {product.productName} - الكمية: {product.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-actions">
                                {!order.isSubmitted && (
                                    <button className="confirm-button" onClick={() => confirmOrder(order.orderId)}>
                                        تأكيد الطلب
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderAdmin;
