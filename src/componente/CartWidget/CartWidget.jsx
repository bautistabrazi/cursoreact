import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget= () => {
    const {cartCantidad} = useContext (CartContext)
    return(
        <div className='carrito-container'>
            <img src="https://postimg.cc/XZ0Q0K69][img]https://i.postimg.cc/XZ0Q0K69/carrito.png" alt="Carrito" className="img-carrito"/>
        {cartCantidad() > 0 && <span className='contad'>{cartCantidad()}</span>}
        </div>
    )
}

export default CartWidget