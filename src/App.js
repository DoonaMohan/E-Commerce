
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProductList from './components/products/ProductList';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';
import Cart from './components/cart/Cart';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import NotFound from './components/notFound/NotFound';
import ProductDetails from './components/products/ProductDetails';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  const [sValue, setSValue] = useState('');
  return (
    <CartContextProvider>
      <div className="App">
        <header className={`container-fluid  App-header`}>
          <Navigation onSearch={setSValue} />
        </header>
        <main className='mainClass'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList searchTerm={sValue} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productID" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </CartContextProvider>
  );
}

export default App;
