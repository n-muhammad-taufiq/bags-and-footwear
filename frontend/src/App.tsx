import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';

const MainLayout = () => {
  return (
    <>
      <CartSidebar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
