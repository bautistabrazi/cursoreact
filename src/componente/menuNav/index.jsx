import { Link } from 'react-router-dom';

import CartWidget from "../CartWidget";


const Navbar = () => {
    return (
        <header className='header'>
            <div className='header-title'>
                <Link to='/' className='title'><h1 className='title-page'>B&B Mobiles</h1></Link>
                <Link to='/' className='img'><img className="img-cart" src="../imagenes/cel.png" alt="img-cart" /></Link>
                <div>
                    <CartWidget/>
                </div>
            </div>
            <nav id="navbar" className='nav'>
                <div className='nav-item'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/Categorias' className='link'>Categorias</Link>
                    <Link to='/conocenos' className='link'>Sobre Nosotros</Link>
                    <Link to='/registrarse' className='link'>Registrarse</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;