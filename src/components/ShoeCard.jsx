import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import './css/Card.css'; 
export default function ShoeCard(props) {
    return (
        <Col xs={12} md={4} className="mb-4 d-flex justify-content-center align-items-center">
                <Card>
                    <p className="discount-label">وفر 30%</p>
                    <Card.Img variant="top" src="./images/image.jpeg" alt={props.name} className="shoe-image" />
                    <CiHeart className='heart'/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            <span className="deleted-price">{props.deletedPrice} جنيها</span>
                            <strong className="current-price"> {props.currentPrice} جنيها</strong>
                        </Card.Text>
                        <Link to="/menshoe/ProductDetails">
                            <button  className="btn-full-width">
                                عرض الخيارات
                            </button>
                        </Link>
                    </Card.Body>
                </Card>
        </Col>
    );
}
