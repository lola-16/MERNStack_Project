import React from 'react';
import './css/Header.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <p>شحن مجاني وخفض 100 جنيه للطلبات +999ج</p>
        </div>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Link to="/" className="navbar-logo-text">DONICCI</Link>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-center">
              <Nav className="nav-links">
                <NavDropdown title="رجالي" id="men-dropdown">
                  <NavDropdown.Item as={Link} to="/menShoe">أحذية رجالي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/2">شراب انكل رجالي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/1">شراب طويل رجالي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/6">شراب غير ظاهر رجالي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/5">شراب هاف رجالي</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="حريمي" id="women-dropdown">
                  <NavDropdown.Item as={Link} to="/category/3">شراب انكل حريمي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/4">شراب طويل حريمي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/7">شراب غير ظاهر حريمي</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/8">شراب هاف حريمي</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="اطفال" id="kids-dropdown">
                  <NavDropdown.Item as={Link} to="/category/9">اطفالي ولادي (من 2 سنة ل 4 سنين)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/10">اطفالي بناتي (من 2 سنة ل 4 سنين)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/12">اطفالي ولادي (من 5 سنين ل 8 سنين)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/11">اطفالي بناتي (من 5 سنين ل 8 سنين)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/13">اطفالي ولادي (من 9 سنين ل 12 سنين)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/14">اطفالي بناتي (من 9 سنين ل 12 سنين)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/all">الجميع</NavDropdown.Item>
                </NavDropdown>

                <Link to="/Offers" className="offers">العروض</Link>
                <Link to="/category/all" className="offers">الجميع</Link>
              </Nav>
            </Navbar.Collapse>
            <div className="nav-icons d-flex align-items-center">
              <Link className="icon" data-bs-toggle="modal" data-bs-target="#cart"><FaShoppingCart /></Link>
              <Link className="icon" to="/Fav"><FaHeart /></Link>
              <Link className="icon" to="/Login"><FaUser /></Link>
            </div>
          </Container>
        </Navbar>



      </header>

      <div className="modal fade" id="cart" tabIndex={-1} aria-labelledby="cartname" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="w-100 model_hed p-3 px-4  bg-body-secondary d-flex justify-content-between align-items-center">
              <h1 className="modal-title fs-5">سلة التسوق1
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-4">
              <div className="d-flex  gap-3 mb-2 align-items-center">
                <div className="d-flex gap-1 align-items-center">
                  <button type="button" className="btn-close" aria-label="Close" />
                  <img src='./images/SocksLeft.jpeg' alt="" title="" style={{ width: "90px", height: "90px", borderRadius: "0" }} />
                  <div>
                    <h4>مجموعة 5 شراب انكل(ابيض ورمادى) كود 47</h4>
                    <p>75.00 جنيه</p>
                  </div>
                </div>
                <div className="quantites d-flex  gap-1 p-0 bg-body-secondary">
                  <span className="decrease p-2 ">
                    -
                  </span>
                  <span className="quantity p-2 border px-3">
                    1
                  </span>
                  <span className="increase p-2">
                    +
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <p>الحد الأدنى للطلب هو 100.00 جنيه - برجاء إضافة المزيد من المنتجات للسلة</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <span>المجموع</span>
                <span className='fs-6 fw-bold'>75.00 جنيه</span>
              </div>
              <div className="d-flex justify-content-between text-danger fs-6 my-2 fw-bold">
                <span>الشحن</span>
                <span>40.00 جنيه</span>
              </div>
              <div>
                <p>احصل على شحن مجاني بعد 350.00 جنيه!
                </p>
              </div>
              <div className="progress" style={{ backgroundColor: "#ecd4e5" }} role="progressbar" aria-label="Default striped example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar progress-bar-striped" style={{ width: '10%', backgroundColor: "#95578a" }} />
              </div>
              <p class="mt-2">أضف 240.00 جنيه إلى سلة التسوق للحصول على شحن مجاني!
              </p>

              <div className="d-flex justify-content-between my-3">
                <span>الإجمالي</span>
                <span>40.00 جنيه</span>
              </div>
              <div className="w-100">
                <Link to="/OrderedForm" className="btn w-100 btn_order"> اتمام الطلب</Link>
              </div>
              <div className="text-center my-3 ">
                <Link to="/" class="text-dark"> تابع التسوق</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
