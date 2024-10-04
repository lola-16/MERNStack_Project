import React from 'react';
import './css/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { increaseQuantity, decreaseQuantity, removeProduct } from '../Rtk/Slices/CartSlice'; // Import actions
// Get the cart items from the Redux store

// Calculate the number of unique products in the cart
const Header = () => {
  const dispatch = useDispatch();

  // Get the cart state from Redux store
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = useSelector(state => state.cart.total); // Assuming you have total in your slice
  const shipping = 40; // Fixed shipping for now
  const uniqueProductCount = cartItems.length;

  // Function to calculate the total price including shipping
  const calculateTotalWithShipping = () => {
    return total < 350 ? total + shipping : total;
  };
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
                </NavDropdown>

                <Link to="/Offers" className="offers">العروض</Link>
                <Link to="/category/all" className="offers">الجميع</Link>
              </Nav>
            </Navbar.Collapse>
            <div className="nav-icons d-flex align-items-center">
              <Link className="icon position-relative" data-bs-toggle="modal" data-bs-target="#cart"><FaShoppingCart />
                  {uniqueProductCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle p-2 cartQuanity bg-danger border border-light rounded-circle">
                      {uniqueProductCount}
                    </span>
                  )}

              </Link>
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
              <h1 className="modal-title fs-5">سلة التسوق</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-4">
              {cartItems.length === 0 ? (
                <p>سلة التسوق فارغة</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="d-flex  gap-3 mb-2 align-items-center">
                    <div className="d-flex gap-1 align-items-center">
                      <button type="button" className="btn-close" aria-label="Close" onClick={() => dispatch(removeProduct(item.id))} />
                      <img src={item.image} alt={item.name} title={item.name} style={{ width: "90px", height: "90px", borderRadius: "0" }} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.price} جنيه</p>
                      </div>
                    </div>
                    <div className="quantites d-flex  gap-1 p-0 bg-body-secondary">
                      <span className="decrease p-2 " onClick={() => dispatch(decreaseQuantity(item.id))}>
                        -
                      </span>
                      <span className="quantity p-2 border px-3">
                        {item.quantity}
                      </span>
                      <span className="increase p-2" onClick={() => dispatch(increaseQuantity(item.id))}>
                        +
                      </span>
                    </div>
                  </div>
                ))
              )}

              <div className="row">
                <div className="col-10">
                  {total < 100 && (
                    <p>الحد الأدنى للطلب هو 100.00 جنيه - برجاء إضافة المزيد من المنتجات للسلة</p>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <span>المجموع</span>
                <span className='fs-6 fw-bold'>{total} جنيه</span>
              </div>

              <div className="d-flex justify-content-between text-danger fs-6 my-2 fw-bold">
                <span>الشحن</span>
                <span>{shipping} جنيه</span>
              </div>
              <div>
                {total < 350 && (
                  <p>احصل على شحن مجاني بعد {350 - total} جنيه!</p>
                )}
              </div>

              <div className="progress" style={{ backgroundColor: "#ecd4e5" }} role="progressbar" aria-label="Default striped example" aria-valuenow={(total / 350) * 100} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar progress-bar-striped" style={{ width: `${(total / 350) * 100}%`, backgroundColor: "#95578a" }} />
              </div>

              {total < 350 && (
                <p className="mt-2">أضف {350 - total} جنيه إلى سلة التسوق للحصول على شحن مجاني!</p>
              )}

              <div className="d-flex justify-content-between my-3">
                <span>الإجمالي</span>
                <span>{calculateTotalWithShipping()} جنيه</span>
              </div>

              <div className="w-100">
                <Link to="/OrderedForm" className="btn w-100 btn_order">اتمام الطلب</Link>
              </div>
              <div className="text-center my-3 ">
                <Link to="/" className="text-dark"> تابع التسوق</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
