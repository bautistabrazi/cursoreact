import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../mock/data'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const ItemListContainer = ({props}) => {
  const [productos, setProductos] = useState([])
  const { categoriaId } = useParams()
  
  useEffect(()=> {
    const coleccionProductos = categoriaId ? query(collection(db, "productos"), where("categoria", "==", categoriaId)): collection(db, "productos")
    getDocs(coleccionProductos)
    .then((res)=> {
      const lista = res.docs.map((producto)=>{
        return{
            id:producto.id,
            ...producto.data()
        }
      })
      setProductos(lista)
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
