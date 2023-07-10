import './index.css'
import Navbar from './componente/menuNav';
import ItemListContainer from './componente/ItemListContainer';
import CartWidget from './componente/CartWidget';



function App() {
  return (
    <>
    <header className='header'>
    <h1 className='title-page'>Tu Celular</h1>
      <Navbar/>
      <div className='cards'>
        <CartWidget/>
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
