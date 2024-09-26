import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './OrderedForm';
export default function OrderedForm() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <div className="form-section">
            <h4>الفوترة والشحن</h4>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>الاسم *</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="city">
                <Form.Label>المدينة / المحافظة *</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="region">
                <Form.Label>المنطقة *</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>العنوان بالتفصيل (اسم الشارع - رقم العمارة - الدور - الشقة) *</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>رقم الهاتف *</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="notes">
                <Form.Label>ملاحظات حول الطلب (اختياري)</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="discount">
                <Form.Label>لديك كود خصم؟</Form.Label>
                <Form.Control type="text" />
                <Button variant="secondary" className="mt-2">اضغط هنا لاستخدامه</Button>
              </Form.Group>

              <Form.Check 
                type="radio" 
                id="cashOnDelivery" 
                label="الدفع نقدًا عند الاستلام" 
                name="paymentMethod" 
                defaultChecked 
                className="my-3" 
              />
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

            <Button variant="primary" className="w-100">تأكيد الطلب</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
