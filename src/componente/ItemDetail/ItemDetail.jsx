import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({producto}) => {
  const [ quantity, setQuantity] = useState('')
  const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addItem(producto, cantidad)
      }
      
  return (
    <div className='item-detail'>
        <h2 className='item-title'>Detalles de: {producto.nombre} {producto.modelo}</h2>
        <div className='item-detail-prod'>
          <img className='item-img' src={producto.imagen} alt={producto.modelo}/>
          <p className='item-description'>{producto.descripcion}</p>
          <h3 className='item-precio'>Precio: {producto.precioreal}</h3>
          { quantity === '' ? <ItemCount className='item-count' initial={1} stock={producto.stock} onAdd={onAdd}/> 
            : <Link to='/cart' className='btn btn-primary mt-2'>Ir al carrito</Link>}        
        </div>
    </div>
  )
}

export default ItemDetail