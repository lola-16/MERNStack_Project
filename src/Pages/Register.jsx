import React, { useState } from 'react';
import './Css/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (hasErrors()) {
            console.log(error);
        } else {
            try {
                const response = await axios.post('http://localhost:8080/api/users', { username, email, password });
                console.log(response.data);
                navigate('/');
            } catch (error) {
                console.error('Error during registration:', error);
                const errorMessage = error.response ? error.response.data : 'An unexpected error occurred.';
                setError({ registration: errorMessage || "فشل في التسجيل. حاول مرة أخرى." });
            }
        }
    };


    const hasErrors = () => {
        const errors = {};
        if (!username) {
            errors.username = "اسم المستخدم مطلوب"; // Validate username
        }
        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            errors.email = "البريد الإلكتروني غير صالح";
        }
        if (password.length < 8) {
            errors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
        }
        setError(errors);
        return Object.keys(errors).length > 0;
    };

    return (
        <div className="container form-container">
            <div className="form-box">
                <h3>تسجيل جديد</h3>
                <form onSubmit={submitHandler} noValidate>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            اسم المستخدم <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        {error.username && (
                            <div className="form-text text-danger">
                                {error.username}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            البريد الإلكتروني <span className="text-danger">*</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {error.email && (
                            <div className="form-text text-danger">
                                {error.email}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            كلمة المرور <span className="text-danger">*</span>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            autoComplete="current-password" // Add this line
                        />
                        {error.password && (
                            <div className="form-text text-danger">
                                {error.password}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn w-100">تسجيل جديد</button>
                    <Link to="/Login" className="text-center d-block mt-3">لديك حساب؟ تسجيل الدخول</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
