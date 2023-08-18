import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/cartItem"

const Cart = () => {
    const {cart, clear, total} = useContext(CartContext)
    return(
        <div className="contenedor-carrito">
            {cart.length
            ?   <div className="contenedor-carritodet">
                    {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                    <p className="total-compra">Total de la compra: ${total()}</p>
                    <div className="btn-final">
                        <button className="vaciar" onClick={clear}>Vaciar Carrito</button>
                        <Link to='/checkout' className="comprar">Finalizar la compra</Link>
                    </div>
                </div>

            : <div className="container--carrito">
                <h2 className="title-page">Tu carrito está vacío</h2>
                <Link to='/' className="boton">Ir a la tienda</Link>
              </div>
            }
        </div>

    )
}


export default Cart