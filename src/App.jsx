import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Conocenos from './componente/pages/conocenos';
import Registrarse from './componente/pages/registrarse';

import './App.scss';

import Navbar from './componente/MenuNav';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
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
      </Routes> 
    </BrowserRouter>
      <footer>

      </footer>
    </>
  );
}

export default App;