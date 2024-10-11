import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Css/OrderedForm.css';

export default function OrderedForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    notes: '',
    paymentMethod: 'cashOnDelivery',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., API call
    console.log(formData);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <div className="form-section">
            <h4>الفاتورة والشحن</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>الاسم *</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>العنوان بالتفصيل</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>رقم الهاتف *</Form.Label>
                <Form.Control
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}" // Adjust pattern based on your requirements
                  title="يرجى إدخال رقم هاتف صحيح مكون من 10 أرقام"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="notes">
                <Form.Label>ملاحظات حول الطلب (اختياري)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Check
                type="radio"
                id="cashOnDelivery"
                label="الدفع نقدًا عند الاستلام"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === 'cashOnDelivery'}
                onChange={handleChange}
                className="my-3"
              />
              {/* Add more payment methods here if necessary */}

              <Button type="submit" variant="primary" className="w-100">تأكيد الطلب</Button>
            </Form>
          </div>
        </Col>

        <Col md={4}>
          <div className="form-section">
            <h4>طلبك</h4>

            <div className="bottom-space">
              <p>مجموعة 12 شراب كود 1037 × 1</p>
              <p className="total-font-bold">180.00 جنيه</p>
            </div>

            <div className="bottom-space">
              <p>المجموع</p>
              <p className="total-line-through">360.00 جنيه</p>
            </div>

            <div className="bottom-space">
              <p>السعر بعد الخصم</p>
              <p className="total-font-bold">180.00 جنيه</p>
            </div>

            <div className="bottom-space">
              <p>الشحن</p>
              <p>40.00 جنيه</p>
            </div>

            <div className="bottom-space">
              <p>الإجمالي</p>
              <p className="total-font-bold">220.00 جنيه</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
