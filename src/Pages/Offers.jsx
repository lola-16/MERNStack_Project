import React from 'react'
import SocksCard from '../components/SocksCard';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
export default function Offer() {
    const [offers, setOffer] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:8080/api/offers')
            .then(response => {
                console.log("Data received from API:", response.data);  // Log the API response
                setOffer(response.data);
            })
            .catch(error => {
                console.error("Error fetching offers:", error);  // Log any error that occurs
            });
    }, []);
    
    
    
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
    {offers.map((sock, index) => {
        console.log(sock);  // Log each offer to check the data
        return (
            <SocksCard key={index}
              name={sock.name} 
              deletedPrice={sock.deletedPrice}
              Price={sock.price}
              image={sock.image} 
            />
        );
    })}
</div>

            </div>
        );
}
