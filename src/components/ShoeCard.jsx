import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import './css/Card.css'; 
import { useDispatch } from 'react-redux'; 
import { addProduct } from '../Rtk/Slices/CartSlice'; 

export default function ShoeCard(props) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // Dispatch the action to add product to cart with the unique id
        dispatch(addProduct({
            id: props.id, // Ensure the product has a unique id
            name: props.name,
            price: props.currentPrice,
            image: props.image,
        }));
    };

    return (
        <Col xs={12} md={4} className="mb-4 d-flex justify-content-center align-items-center" data-id={props.id}>
            <Card className='shoecard'>
                <p className="discount-label">وفر 30%</p>
                <Card.Img variant="top" src={props.image} alt={props.name} className="shoe-image" />
                <CiHeart className='heart'/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text className='prices'>
                        <span className="deleted-price">700 جنيها</span>
                        <strong className="current-price">{props.currentPrice} جنيها</strong>
                    </Card.Text>
                    <button onClick={handleAddToCart} className="btn-full-width btn_cart">
                        اضافه الى سله
                    </button>
                </Card.Body>
            </Card>
        </Col>
    );
}
