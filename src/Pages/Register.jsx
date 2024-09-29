import React, { useState } from 'react';
import './Css/Register.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (hasErrors()) {
            console.log(error);
        } else {
            navigate('/');
        }
    };

    const hasErrors = () => {
        const errors = {};
        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            errors.email = "البريد الإلكتروني غير صالح";
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
                    <Link to="/Login" className="text-center d-block mt-3">لديك حساب؟ تسجيل الدخول</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
