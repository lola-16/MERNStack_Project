import React from 'react';
import './Css/HomePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocksCard from '../components/SocksCard';  
const HomePage = () => {
  const socks = [
    { title: 'شرابات انكل حريمي', imgSrc: './images/Ankel.jpeg', price: 50 ,to:"/WomenSocks"},
    { title: 'شرابات طويلة رجالي', imgSrc: './images/Men.jpeg', price: 60,to:"/ManSocks" },
    { title: 'شرابات اطفالي', imgSrc: './images/children.jpeg', price: 30 ,to:"/ChildSocks"},
    { title: 'شرابات طويلة حريمي', imgSrc: './images/tallwomen.jpeg', price: 55 ,to:"/WomenSocks"},
    { title: 'العروض', imgSrc: './images/offers.jpeg', price: 40,to:"/Offers" },
  ];

  return (
    <section className="home-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 image-container">
            <img src='./images/SosksRight.jpeg' alt="Socks left" className="img-fluid animated-image-left" />
          </div>
          <div className="col-lg-6 col-md-12 image-container">
            <img src='./images/SocksLeft.jpeg' alt="Socks right" className="img-fluid animated-image-right" />
          </div>
          <div className="centered-box">
            <p>جواربنا المميزة مصنوعة من مواد عالية الجودة توفر أقصى درجات الراحة والمتانة.</p>
            <div className="Links">
              <Link className=" btn-custom" to="/category/3">شراب حريمي</Link>
              <Link className=" btn-custom" to="/category/">شراب رجالي</Link>
            </div>
          </div>
        </div>
      </div>
      <Container className="mt-5">
        <Row>
          {socks.map((item, index) => (
            <Col md={3} key={index} className="mb-4 text-center">
              <div className="circle-image">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <h5>{item.title}</h5>
              <Link rel="stylesheet" to={item.to} className='More'>
                المزيد +
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className='mt-3'>
        <h1 className='head'>
          <span className='highlight' >رجالي !!</span>
          <Link className='more-btn' to="/category/2">
            عرض المزيد
          </Link>
        </h1>
        <Row>
          <SocksCard />
          <SocksCard />
          <SocksCard />
        </Row>
      </Container>
      <Container fluid className='mt-3'>
        <h1 className='head'>
          <span className='highlight' > حريمي!!</span>
          <Link className='more-btn' to="/category/3">
            عرض المزيد
          </Link>
        </h1>
        <Row>
          <SocksCard />
          <SocksCard />
          <SocksCard />
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
