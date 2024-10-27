import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wine, Grape, Wallet, Store } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MyCellar from './pages/MyCellar';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/my-cellar" element={<MyCellar />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;