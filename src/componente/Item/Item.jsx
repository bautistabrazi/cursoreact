import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
    return (
        <div className="card">
        <img src={prod.imagen} alt={prod.nombre} className="img-producto" />
        <div className="card-body">
          <h2 className="card-title">{prod.nombre}</h2>
          <h5 className="card-title">{prod.modelo}</h5>
          <p className="precio">Precio:{prod.precioreal}</p>
          <Link to={`/item/${prod.id}`} className="btn btn-primary mt-2">Ver Producto</Link>
        </div>
      </div>
    )
  }


export default Item