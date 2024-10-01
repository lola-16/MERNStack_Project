import React, { useState } from 'react';
import './Css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
                const response = await axios.post('http://localhost:8080/api/login', { email, password });
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                navigate('/Account');
            } catch (err) {
                console.error(err);
                if (err.response && err.response.data) {
                    setError({ server: err.response.data.message || 'Login failed' });
                } else {
                    setError({ server: 'An unexpected error occurred' });
                }
            }
        }
    };

    const hasErrors = () => {
        const errors = {};
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
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
                <h3>تسجيل الدخول</h3>
                <form onSubmit={submitHandler} noValidate>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            البريد الإلكتروني <span className="text-danger">*</span>
                        </label>
                        <input
                            type="email"
                            className={`form-control ${error.email ? 'is-invalid' : ''}`}
                            id="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {error.email && (
                            <div className="invalid-feedback">
                                {error.email}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            كلمة المرور <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className={`form-control ${error.password ? 'is-invalid' : ''}`}
                                id="password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? 'إخفاء' : 'عرض'}
                            </button>
                            {error.password && (
                                <div className="invalid-feedback">
                                    {error.password}
                                </div>
                            )}
                        </div>
                    </div>
                    {error.server && (
                        <div className="alert alert-danger" role="alert">
                            {error.server}
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary w-100">تسجيل الدخول</button>
                    <Link to="/Register" className="text-center d-block mt-3">مستخدم جديد؟ تسجيل حساب</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
