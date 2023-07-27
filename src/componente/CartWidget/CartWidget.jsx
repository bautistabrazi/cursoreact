
const CartWidget= () => {
    const contador = 0;
    return(
        <div className='carrito-container'>
            <img src="../imagenes/carrito2.png" alt="Carrito" className="img-carrito"/>
            <span className='contad'>{contador}</span>
        </div>
    )
}

export default CartWidget