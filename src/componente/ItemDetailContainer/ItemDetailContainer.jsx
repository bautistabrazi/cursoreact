import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../mock/data'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        const collectionProds = collection(db, 'productos')
        const refDoc = doc(collectionProds, id)
        getDoc(refDoc)
        .then((res)=>setProducto({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
    },[])
 
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer