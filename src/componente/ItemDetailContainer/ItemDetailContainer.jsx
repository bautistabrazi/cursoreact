import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../mock/data'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
    },[])
 
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer