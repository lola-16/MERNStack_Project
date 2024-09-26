import React from 'react';
import './HomePage.css';
import OffersSection from '../components/OffersSection';
const HomePage = () => {
  return (
    <section className="home-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 image-container">
            <img
              src='https://doniccieg.com/storage/2023/02/WhatsApp-Image-2022-11-27-at-3.40.00-PM-1.jpeg'
              alt="Socks left"
              className="img-fluid animated-image-left"
            />
            <div className="info-box">
              <p>
                جواربنا المميزة مصنوعة من مواد عالية الجودة توفر أقصى درجات الراحة
                والمتانة.
              </p>
              <div className="buttons">
                <button className="btn btn-primary">شراب رجالي</button>
                <button className="btn btn-secondary">شراب حريمي</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-container">
            <img
              src='https://doniccieg.com/storage/2023/02/WhatsApp-Image-2022-11-27-at-3.40.00-PM-1.jpeg'
              alt="Socks right"
              className="img-fluid animated-image-right"
            />
            <div className="info-box">
              <p>
                جواربنا المميزة مصنوعة من مواد عالية الجودة توفر أقصى درجات الراحة
                والمتانة.
              </p>
              <div className="buttons">
                <button className="btn btn-primary">شراب رجالي</button>
                <button className="btn btn-secondary">شراب حريمي</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <OffersSection />
    </section>
  );
};

export default HomePage;
