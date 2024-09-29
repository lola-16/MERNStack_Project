import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Css/MenShoe.css';
import ShoeCard from '../components/ShoeCard';

export default function MenShoe() {
    const shoes = [
        { name: 'كود 1B غامق', deletedPrice: 50, currentPrice: 35 },
        { name: 'كود 2B فاتح', deletedPrice: 45, currentPrice: 30 },
        { name: 'كود 3A أسود', deletedPrice: 60, currentPrice: 40 },
    ];

    return (
        <>
            <div>
                <Container fluid>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label htmlFor="sort" className="form-label">الترتيب الافتراضي</label>
                            <select
                                id="sort"
                                className="form-select"
                            >
                                <option value="default">الترتيب الافتراضي</option>
                                <option value="priceLowToHigh">ترتيب حسب: الأقل سعراً</option>
                                <option value="priceHighToLow">ترتيب حسب: الأعلى سعراً</option>
                            </select>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="h-100">
                <Row className="text-center g-4">
                    {shoes.map((shoe, index) => (
                        <ShoeCard 
                            key={index} 
                            name={shoe.name} 
                            deletedPrice={shoe.deletedPrice} 
                            currentPrice={shoe.currentPrice} 
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}
