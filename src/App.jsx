// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenShoe from './Pages/MenShoe';
import ProductDetails from './Pages/ProductDetails';
import Account from './Pages/Account';
import OrderedForm from './Pages/OrderedForm';
import Login from './Pages/Login';
import Offers from './Pages/Offers';
import Register from './Pages/Register';
import FavPage from './Pages/FavPage';
import Cart from './Pages/Cart';
import Adress from './Pages/Adress';
import AccountDetails from './Pages/AccountDetails';
import Orders from './Pages/Orders';
import CategoryPage from './Pages/CategoryPage'; 

/* eslint-disable*/
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Dynamic Route for Categories */}
          <Route path="/category/:categoryNumber" element={<CategoryPage />} />
          
          {/* Other Routes */}
          <Route path="/Account/Orders" element={<Orders />} />
          <Route path="/Account/AccountDetails" element={<AccountDetails />} />
          <Route path="/Account/Address" element={<Adress />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Fav" element={<FavPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/menShoe" element={<MenShoe />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/OrderedForm" element={<OrderedForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
