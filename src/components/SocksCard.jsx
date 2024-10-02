import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SocksCard = ({ name, deletedPrice, Price, image, _id }) => {
    return (
        <div className="col-md-4 mb-4">
            <Card className="h-100">
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {deletedPrice && (
                            <span className="text-muted text-decoration-line-through me-2">{deletedPrice} ريال</span>
                        )}
                        <span className="fw-bold">{Price} ريال</span>
                    </Card.Text>
                    <Link to={`/products/${_id}`} className="btn btn-primary mt-auto">تفاصيل المنتج</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SocksCard;
