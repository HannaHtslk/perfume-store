import { useEffect, useState } from 'react';
import './App.css';
import './seedProducts';
import { fetchProducts } from './services/productsAPI';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return products.map(product => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  ));
}

export default App;
