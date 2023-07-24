import Lista from '../list/lista';

function ProdsInPage(productos) {
  const listProductos = productos.map((item) => {
    return (
      <Lista
        key={item.id}
        nombre={item.nombre}
        modelo={item.modelo}
        imagen={item.imagen}
        precioreal={item.precioreal}
      />
    );
  });

  return listProductos;
}

const ItemListContainer = (props) => {
  return <div className='contenedor-productos'>{ProdsInPage(props.productos)}</div>;
};

export default ItemListContainer;