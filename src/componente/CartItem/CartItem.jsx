import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)
    return (
        <div className="container-cart">
            <img src={item.imagen} alt={item.nombre} />
            <h2 className="item-name">{item.nombre} {item.modelo}</h2>
            <h3 className="item-precio">Precio: {item.precioreal}</h3>
            <h3 className="item-cantidad">Cantidad: {item.quantity}</h3>
            <h4 className="item-sub">Subtotal: ${item.quantity * item.precio}</h4>
            <button className="btn-eliminar" onClick={()=>deleteItem(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem