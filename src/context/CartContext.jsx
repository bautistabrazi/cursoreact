import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((producto)=>{
                if(producto.id === item.id){
                    return {...producto, quantity: producto.quantity + quantity}
                }else {
                    return producto
                }
            }))
        } else {
        setCart([...cart, {...item, quantity}])
        }

    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item)=> item.id === id)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
    }

    const cartCantidad = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0)
    }
    
    return(
        <CartContext.Provider value={{cart, addItem, clear, isInCart, deleteItem, cartCantidad, total}}>
            {children}
        </CartContext.Provider>
    )

}

