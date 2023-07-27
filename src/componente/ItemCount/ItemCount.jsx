import React, {useState} from 'react';

const ItemCount = ({stock, onAdd, initial}) => {
        const [count, setCount] = useState(initial)
        const suma = () => {
            if (count < stock ){
                setCount(count + 1 )
            }
        }        
        const resta = () => {
            if (count > 0 ){
                setCount(count - 1);
            }
        }

    return (
        <div className='count-container'>
            <div className='count'>
                <button className="btn btn-primary mt-2" onClick={resta}>-</button>
                <span className="btn">{count}</span>
                <button className="btn btn-primary mt-2" onClick={suma}>+</button>
            </div>
            <button className="btn btn-primary mt-2" disabled={count === 0} onClick={ ()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}



export default ItemCount
