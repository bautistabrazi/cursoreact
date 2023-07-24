import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './componente/pages/home';
import Conocenos from './componente/pages/conocenos';
import Registrarse from './componente/pages/registrarse';
import Categories from './componente/pages/categorias';

import './App.scss';

import Navbar from './componente/menuNav';
import ItemListContainer from './componente/ItemListContainer';
import CartWidget from './componente/CartWidget';
import products from './componente/Stock/products.json';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home/>}
        />
        <Route
        path='conocenos'
        element={<Conocenos/>}
        />
        <Route
        path='categorias'
        element={<Categories/>}
        />
        <Route
        path='registrarse'
        element={<Registrarse/>}
        />
      </Routes> 
    </BrowserRouter>



      <ItemListContainer productos={products.productos} />
      <footer>

      </footer>
    </>
  );
}

export default App;