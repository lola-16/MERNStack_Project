import React from 'react'

export default function Login() {
    return (
        <>
        <div className="container form-container">
        <div className="row">
            <div className="col-md-6">
                <div className="form-box">
                    <h3>تسجيل الدخول</h3>
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">اسم المستخدم أو البريد الإلكتروني <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="username" required/>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">كلمة المرور <span className="text-danger">*</span></label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="password" required/>
                                <button className="btn btn-outline-secondary" type="button" id="showPassword"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="rememberMe"/>
                            <label className="form-check-label" for="rememberMe">تذكرني</label>
                        </div>
                        <button type="submit" className="btn w-100">تسجيل الدخول</button>
                        <link to="/login" className="forgot-password">نسيت كلمة مرورك؟</link>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-box">
                    <h3>تسجيل جديد</h3>
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">البريد الإلكتروني <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                        <p>سيتم إرسال رابط لتعيين كلمة مرور جديدة إلى عنوان بريدك الإلكتروني.</p>
                        <button type="submit" className="btn w-100">تسجيل جديد</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}
