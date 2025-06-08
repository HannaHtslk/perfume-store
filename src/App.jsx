// import { useEffect, useState } from 'react';
import '@/App.css';
import '@/seedProducts';
// import { fetchProducts } from './services/productsAPI';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoute';
import { Home } from '@/pages/HomePage/Home';
import { Login } from '@/pages/LoginPage/Login';
import { AdminDashboard } from '@/pages/AdminDashboard/AdminDashboard';

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
    <Routes>
      <Route path="/" element={<Home />} />
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
  );
}

export default App;
