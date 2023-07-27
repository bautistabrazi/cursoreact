import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../mock/data'
import { useParams } from 'react-router-dom';


const ItemListContainer = ({props}) => {
  const [productos, setProductos] = useState([])
  const { categoriaId } = useParams()
    useEffect(() => {
      getProductos()
      .then((res)=> {
        if (categoriaId){
          setProductos(res.filter((item)=> item.categoria === categoriaId))
        }else{
          setProductos(res)
        }
      })
      .catch((error)=> console.log(error))
    },[categoriaId])
  
  return (
    <div className='div-itemlistcontainer'>
      <h2 className='title'>{props} {categoriaId && categoriaId}</h2>
      <ItemList productos={productos}/>
    </div>
  )
};

export default ItemListContainer;      
