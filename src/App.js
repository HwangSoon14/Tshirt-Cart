import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import Detail from './pages/Detail';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WishlistPage from './pages/WishlistPage';
function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:productId" exact element={<Detail/ >}/>
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/wishlist" exact element={<WishlistPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
