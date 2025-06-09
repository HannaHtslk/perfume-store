// import { useEffect, useState } from 'react';
import '@/App.css';
// import { fetchProducts } from './services/productsAPI';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoute';
import { Home } from '@/pages/HomePage/Home';
import { Login } from '@/pages/LoginPage/Login';
import { AdminDashboard } from '@/pages/AdminDashboard/AdminDashboard';
import { About } from '@/pages/AboutPage/About';
import { Catalogue } from '@/pages/CataloguePage/Catalogue';
import { Cart } from '@/pages/CartPage/Cart';
import { Layout } from '@/components/Layout/Layout';

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     const data = await fetchProducts();
  //     setProducts(data);
  //   };
  //   loadProducts();
  // }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
