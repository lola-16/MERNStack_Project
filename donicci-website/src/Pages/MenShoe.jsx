import React from 'react';
import { Breadcrumb, Dropdown, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import './MenShoe.css';

export default function MenShoe() {
    return (
        <>
            <div>
                <Container fluid className="d-flex justify-content-end align-items-end">
                    <Breadcrumb>
                        <Breadcrumb.Item active>احذية رجالي</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">المتجر</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">الرئيسية</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>

                <Container fluid className="d-flex justify-content-center align-items-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            الترتيب الافتراضي
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>الترتيب الافتراضي</Dropdown.Item>
                            <Dropdown.Item>الترتيب من الاكثر شيوعا</Dropdown.Item>
                            <Dropdown.Item>الترتيب حسب التقييم</Dropdown.Item>
                            <Dropdown.Item>الترتيب من الاعلى للاقل</Dropdown.Item>
                            <Dropdown.Item>الترتيب من الاقل للاعلى</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </div>
            <Container className="h-100">
                <Row className="text-center g-4">
                    <ProductCard />
                    <ProductCard/>
                    <ProductCard />
                    <ProductCard/>
                    <ProductCard />
                    <ProductCard/>
                </Row>
            </Container>
        </>
    );
}
