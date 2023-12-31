import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget= () => {
    const {cartCantidad} = useContext (CartContext)
    return(
        <div className='carrito-container'>
            <img src="https://i.postimg.cc/t4ky2rNX/carrito2.png" alt="Carrito" className="img-carrito"/>
        {cartCantidad() > 0 && <span className='contad'>{cartCantidad()}</span>}
        </div>
    )
}

export default CartWidget