// src/components/Sales.jsx
import React, { useState } from 'react';

const Sales = () => {
    const [sales, setSales] = useState([
        { id: 1, product: 'Smartphone', amount: 699, date: '2024-04-10', quantity: 1 },
        { id: 2, product: 'Laptop', amount: 1299, date: '2024-04-11', quantity: 2 },
        { id: 3, product: 'Tablet', amount: 499, date: '2024-04-12', quantity: 3 },
        // Add more sales as needed
    ]);

    const totalRevenue = sales.reduce((total, sale) => total + sale.amount, 0);
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
                        <th>Sale ID</th>
                        <th>Product</th>
                        <th>Amount ($)</th>
                        <th>Quantity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.product}</td>
                            <td>{sale.amount}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sales;
