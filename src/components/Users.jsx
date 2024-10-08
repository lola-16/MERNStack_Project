// src/components/Users.js
import React, { useState } from 'react';
import  './css/users.css'
const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', orders: 5, signupDate: '2023-01-15' },
        { id: 2, name: 'Jane Smith', orders: 3, signupDate: '2023-03-22' },
    ]);

    return (
        <div>
            <h1>بيانات مستخدمي الموقع</h1>
            <table className='user'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>الاسم</th>
                        <th>العنوان</th>
                        <th>رقم الهاتف</th>
                        <th>الايميل</th>
                        <th>تاريخ التسجيل</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.signupDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
