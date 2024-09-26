import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css'; 

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
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
            console.log({ username, password, email });
            // Here you would typically navigate or call an API
        }
    };

    const hasErrors = () => {
        const errors = {};
        if (!email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
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
            <div className="row">
                <div className="col-md-6">
                    <div className="form-box">
                        <h3>تسجيل الدخول</h3>
                        <form onSubmit={submitHandler} noValidate>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    اسم المستخدم أو البريد الإلكتروني <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    required
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
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
                            <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    تذكرني
                                </label>
                            </div>
                            <button type="submit" className="btn w-100">تسجيل الدخول</button>
                            <link className="forgot-password">نسيت كلمة مرورك؟</link>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-box">
                        <h3>تسجيل جديد</h3>
                        <form>
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
                            <p>سيتم إرسال رابط لتعيين كلمة مرور جديدة إلى عنوان بريدك الإلكتروني.</p>
                            <button type="submit" className="btn w-100">تسجيل جديد</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Login;
