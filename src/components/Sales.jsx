import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/sales', { // Make sure you're calling the correct endpoint
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                console.log('Fetched sales:', response.data); // Check what data is fetched
                const submittedSales = response.data.filter(sale => sale.orderId); // Adjust this line based on your response structure
                setSales(submittedSales);
            } catch (err) {
                console.error('Error fetching sales:', err);
            }
        };
        

        fetchSales();
    }, []);

    const totalRevenue = sales.reduce((total, sale) => total + sale.totalAmount, 0);
    const totalSales = sales.length;

    return (
        <div>
            <h1>Sales Overview</h1>
            <div>
                <h2>Total Revenue: ${totalRevenue.toFixed(2)}</h2>
                <h3>Total Sales: {totalSales}</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>رقم العملية</th>
                        <th>اسم المنتج</th>
                        <th>اجمالي البيع</th>
                        <th>الكمية</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.orderId}>
                            <td>{sale.orderId}</td>
                            <td>{sale.products.map(p => p.productName).join(', ')}</td>
                            <td>{sale.totalAmount}</td>
                            <td>{sale.products.reduce((total, p) => total + p.quantity, 0)}</td>
                            <td>{new Date(sale.orderDate).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sales;
