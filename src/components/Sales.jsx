import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/sales.css'; // Make sure to create a CSS file for styles

const Sales = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/orderSubmited', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                console.log('Fetched orders:', response.data);
                const submittedSales = response.data; 
                setSales(submittedSales);
            } catch (err) {
                console.error('Error fetching sales:', err.response ? err.response.data : err.message);
            }
        };

        fetchSales();
    }, []);

    const totalRevenue = sales.reduce((total, sale) => total + (sale.totalAmount || 0), 0);
    const totalSales = sales.length;

    return (
        <div className="sales-container">
            <h1>Sales Overview</h1>
            <div className="summary">
                <h2>Total Revenue: ${totalRevenue.toFixed(2)}</h2>
                <h3>Total Sales: {totalSales}</h3>
            </div>

            <div className="sales-cards">
                {sales.length > 0 ? (
                    sales.map(sale => (
                        <div className="sale-card" key={sale._id}>
                            <div className="card-header">
                                <h3>Order #{sale.orderId || 'N/A'}</h3>
                                <p><strong>Total Amount:</strong> ${sale.totalAmount || 0}</p>
                            </div>
                            <div className="card-body">
                                <p className='pp'><strong>Customer:</strong> {sale.name || 'N/A'}</p>
                                <p className='pp'><strong>Email:</strong> {sale.email || 'N/A'}</p>
                                <p className='pp'><strong>Phone:</strong> {sale.phone || 'N/A'}</p>
                                <p className='pp'><strong>Shipping Address:</strong> {sale.address || 'N/A'}</p>
                                <p className='pp'><strong>Order Date:</strong> {new Date(sale.orderDate).toLocaleString()}</p>
                                <p className='pp'><strong>Payment Method:</strong> {sale.paymentMethod || 'N/A'}</p>
                                <p className='pp'><strong>Shipping Fee:</strong> {sale.shipping || 'N/A'}</p>
                                <p className='pp'><strong>Products:</strong> {sale.products && sale.products.length > 0 
                                    ? sale.products.map(p => `${p.productName} (Qty: ${p.quantity})`).join(', ') 
                                    : 'No products available'}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No submitted orders available.</p>
                )}
            </div>
        </div>
    );
};

export default Sales;
