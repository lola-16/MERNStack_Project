import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4>معلومات</h4>
            <ul>
              <li>من نحن</li>
              <li>تواصل معنا</li>
              <li>سياسة الشحن</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>التواصل</h4>
            <p>info@doniccieg.com</p>
            <p></p>
          </div>
          <div className="col-md-4">
            <h4>تابعنا على</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Donicci.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
