import React, { useState } from 'react';
import './Css/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (hasErrors()) {
            console.log(error);
        } else {
            navigate('/Account');
        }
    };

    const hasErrors = () => {
        const errors = {};
        if (!username.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])?$/)) {
            errors.username = "البريد الإلكتروني غير صالح";
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
                        <label htmlFor="username" className="form-label">
                            البريد الإلكتروني <span className="text-danger">*</span>
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
                        <label htmlFor="password" className="form-label">
                            كلمة المرور <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className="form-control"
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
                        </div>
                        {error.password && (
                            <div className="form-text text-danger">
                                {error.password}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn w-100">تسجيل الدخول</button>
                    <Link to="/Register" className="text-center d-block mt-3">مستخدم جديد؟ تسجيل حساب</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
