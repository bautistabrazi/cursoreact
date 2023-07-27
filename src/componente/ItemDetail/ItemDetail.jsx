import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        console.log('Compraste ', cantidad);
      }
      
  return (
    <div className='item-detail'>
        <h2 className='item-title'>Detalles de: {producto.nombre} {producto.modelo}</h2>
        <div className='item-detail-prod'>
        <img className='item-img' src={producto.imagen} alt={producto.modelo}/>
        <p className='item-description'>{producto.descripcion}</p>
        <h3 className='item-precio'>Precio: {producto.precioreal}</h3>
        <ItemCount className='item-count' initial={1} stock={producto.stock} onAdd={onAdd}/> 
        </div>
    </div>
  )
}

export default ItemDetail