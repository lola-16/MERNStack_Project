import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard() {
    return (
        <Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center align-items-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./" alt="Shoe" />
                <Card.Body>
                    <Card.Title>3B Brown</Card.Title>
                    <Card.Text>
                        Stylish brown and white sneakers with a comfortable sole, perfect for casual outings.
                    </Card.Text>
                    <Link to="/menshoe/ProductDetails">
                        <Button variant="primary">عرض الخيارات</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
