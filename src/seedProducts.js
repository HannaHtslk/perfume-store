import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const products = [
  {
    name: 'Chanel No.5',
    price: 19.99,
    description:
      'Sophisticated and elegant. A clean, invigorating scent. A woody, spicy, and musky scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Versace Eros',
    price: 45.99,
    description:
      'Undeniably sexy. A bold, sensual, and mysterious scent. Bold and mysterious. A bold, sensual, and mysterious scent. A bold, sensual, and mysterious scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1594125311687-3b1b3eafa9f4?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Dior Sauvage',
    price: 20.99,
    description:
      'New product. Exotic and mysterious. Unbound by tradition. A bold, sensual, and mysterious scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1668022812056-261bd7dbafad?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Giorgio Armani Code',
    price: 30.99,
    description:
      'A modern, sophisticated scent. sharp, spicy, and woody fragrance.  A clean, invigorating scent. A woody, spicy, and musky scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1628950749921-ace26a06e307?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Dolce & Gabbana The One',
    price: 50.99,
    description:
      'A sharp, spicy, and woody fragrance. A modern, sophisticated scent. A clean, invigorating scent. A woody, spicy, and musky scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1726167527720-1ed1f20385d6?q=80&w=2931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Gucci Flora Gorgeous',
    price: 70.99,
    description:
      'A sweet, floral fragrance with a hint of citrus and mint. A clean, invigorating scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1680503525530-d21c05862d4d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: "Hermes Terre d'Hermes",
    price: 15.99,
    description:
      'A fresh, aquatic fragrance with a hint of citrus and mint. A clean, invigorating scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1683099788350-82529fe1ba75?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Lancôme La Vie Est Belle',
    price: 30.99,
    description:
      'A sweet, floral fragrance with a hint of citrus and mint. A clean, invigorating scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1651321591102-f86ae12f2016?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Lacoste L.12.12',
    price: 40.99,
    description:
      'A fresh, aquatic fragrance with a hint of citrus and mint. A clean, invigorating scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1627408727578-172381083156?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
  {
    name: 'Givenchy Gentleman',
    price: 29.99,
    description:
      'The original scent for men. A modern, sophisticated fragrance. A woody, spicy, and musky scent.',
    imageUrl:
      'https://images.unsplash.com/photo-1693960794377-b388be4227c2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inStock: true,
  },
];

const seedProducts = async () => {
  try {
    const productsRef = collection(db, 'products');

    for (const product of products) {
      await addDoc(productsRef, product);
    }

    console.log('Products seeded successfully.');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

seedProducts();
