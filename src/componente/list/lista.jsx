
function Lista (productos) {
  return(
    <div className="container-producto">
      <h2 className="producto-title">{productos.nombre}</h2>
      <h3 className="producto-model">{productos.modelo}</h3>
      <img src={productos.imagen} alt={productos.nombre} className="img-producto" />
      <p className="precio">Precio:{productos.precioreal}</p>
    </div>
  )
}

export default Lista