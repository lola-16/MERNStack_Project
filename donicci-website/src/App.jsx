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
import ManSocks from './Pages/ManSocks';
import WomenSocks from './Pages/WomenSocks';
import ChildSocks from './Pages/ChildSocks';
import Login from './Pages/Login';
/* eslint-disable*/
function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ChildSocks' element={<ChildSocks/>}/>
          <Route path='/WomenSocks' element={<WomenSocks/>}/>
          <Route path='/ManSocks' element={<ManSocks/>}/>
          <Route path="/" element={<HomePage />} /> 
          <Route path='/menShoe' element={<MenShoe />} />
          <Route path='/menshoe/ProductDetails' element={<ProductDetails />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Account/OrderedForm' element={<OrderedForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
