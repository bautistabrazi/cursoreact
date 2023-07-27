import Item from '../Item/Item';

const ItemList = ({productos}) => {
  return (
    <div className="contenedor">
      {productos.map((prod)=><Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList