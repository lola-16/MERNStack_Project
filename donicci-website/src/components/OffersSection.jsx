import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './OffersSection.css';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <h2 className="section-title">العروض</h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="offer-card">Offer 1
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="offer-card">Offer 2</div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="offer-card">Offer 3</div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="offer-card">Offer 4</div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="offer-card">Offer 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
