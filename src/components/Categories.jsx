// src/components/Categories.js
import React, { useState } from 'react';
import './css/category.css'
const Categories = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
    ]);

    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (newCategory.trim() === '') return;
        const newId = categories.length ? categories[categories.length - 1].id + 1 : 1;
        setCategories([...categories, { id: newId, name: newCategory }]);
        setNewCategory('');
    };

    const handleEditCategory = (id) => {
        const updatedName = prompt('Enter new category name:');
        if (updatedName) {
            setCategories(categories.map(cat => cat.id === id ? { ...cat, name: updatedName } : cat));
        }
    };

    const handleDeleteCategory = (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            setCategories(categories.filter(cat => cat.id !== id));
        }
    };

    return (
        <div className='cont'>
            <h1>ادارة التصنيفات</h1>
            <form onSubmit={handleAddCategory}>
                <div className="form-group">
                    <label htmlFor="categoryName">اسم التصنيف:</label>
                    <input
                        type="text"
                        id="categoryName"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">اضافة تصنيف</button>
            </form>

            <table className='cat'>
                <thead>
                    <tr>
                        <th>رقم الفئة</th>
                        <th>الاسم</th>
                        <th>--</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(cat => (
                        <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.name}</td>
                            <td>
                            <button onClick={() => handleEditCategory(cat.id)}>
                                    <i className="fas fa-edit"></i> {/* Edit icon */}
                                </button>
                                <button className="delete" onClick={() => handleDeleteCategory(cat.id)}>
                                    <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Categories;
