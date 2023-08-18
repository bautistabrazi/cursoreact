import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Conocenos from './componente/pages/conocenos';
import Registrarse from './componente/pages/registrarse';
import { CartProvider } from './context/CartContext';

import './App.scss';

import Navbar from './componente/MenuNav';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer';
import Footer from './componente/Footer/Footer';
import Cart from './componente/Cart/cart';
import React,{ useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase/firebase';
import { productos } from './mock/data';
import CheckOut from './componente/Checkout/Checkout';



function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route 
            exact
            path='/'
            element={<ItemListContainer props={'Bienvenidos a B&B Mobiles'}/>}
          />
          <Route
          path='conocenos'
          element={<Conocenos/>}
          />
          <Route
          path='categorias/:categoriaId'
          element={<ItemListContainer/>}
          />
          <Route
          path='registrarse'
          element={<Registrarse/>}
          />
          <Route
          path='/item/:id'
          element={<ItemDetailContainer/>}
          />
          <Route
          path='/cart'
          element={<Cart/>}
          />
          <Route
          path='/checkout'
          element={<CheckOut/>}
          />
        </Routes> 
      </BrowserRouter>
        <Footer/>
    </CartProvider>
    </>
  );
}

export default App;