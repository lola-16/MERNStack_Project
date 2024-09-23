import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import OffersSection from './components/OffersSection';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


/* eslint-disable*/
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <OffersSection />
      <Footer />
      
    </div>
  );
}

export default App;
