import React from 'react'
import SocksCard from '../components/SocksCard';

export default function Offers() {
        const manSocks = [
            { name: 'مجموعة 10 شرابات طويل كود 71', deletedPrice: 80, currentPrice: 65 },
            { name: 'مجموعة 6 شرابات قصير كود 72', deletedPrice: 70, currentPrice: 50 },
            { name: 'مجموعة 4 شرابات رياضي كود 73', deletedPrice: 75, currentPrice: 60 }
        ];
    
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label htmlFor="sort" className="form-label">الترتيب الافتراضي</label>
                        <select id="sort" className="form-select">
                            <option value="default">الترتيب الافتراضي</option>
                            <option value="priceLowToHigh">ترتيب حسب: الأقل سعراً</option>
                            <option value="priceHighToLow">ترتيب حسب: الأعلى سعراً</option>
                        </select>
                    </div>
                </div>
                <div className="row" id="product-list">
                    {manSocks.map((sock, index) => (
                        <SocksCard key={index} name={sock.name} deletedPrice={sock.deletedPrice} currentPrice={sock.currentPrice} />
                    ))}
                </div>
            </div>
        );
}
