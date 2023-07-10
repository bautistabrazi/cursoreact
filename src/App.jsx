import './index.css'
import Navbar from './componente/menuNav';
import Carrito from './componente/Carrito';
import ItemListContainer from './componente/ItemListContainer';
import CartWidget from './componente/Cartwidget';



function App() {
  return (
    <>
    <header className='header'>
    <h1 className='title-page'>Tu Celular</h1>
      <Navbar/>
      <div className='cards'>
        <CartWidget/>
        <Carrito/>
      </div>
    </header>
   <ItemListContainer
          titulo= {"Bienvenido a la tienda de celulares"}
        >
        </ItemListContainer>

    </>
  )
}

export default App
