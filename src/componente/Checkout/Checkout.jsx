import { addDoc, collection, orderBy, serverTimestamp } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { db } from "../../firebase/firebase"
import { CartContext } from "../../context/CartContext"

const CheckOut = () => {
    const[user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [order, setOrder] = useState('')
    const {cart, total, clear} = useContext(CartContext)

    const datosUser = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.number){
            alert('Complete los campos solicitados')
        }else{
            let orden = {
                user,
                item:cart,
                total:total(),
                date: serverTimestamp()
            }
            const ventas = collection (db, "ordenes")
            addDoc(ventas, orden)
            .then((res)=>{
                setOrder(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }

    }

    return(
    <div>
        {order !== '' ?
            <div>
                <p>La compra fue realizada con éxito!</p>
                <p>Su numero de compra es: {order}</p>
            </div>
        :         
        <div className="section-form">
            <h2>Finaliza tu compra, rellene los datos a continuación</h2>
            <form onSubmit={finalizarCompra} className="formulario">
                <div className="formulario-det">
                    <label className="label-name">Nombre: </label>
                    <input className="input-name" onChange={datosUser} type="text" placeholder="Ingrese su nombre" name="name" required/>
                </div>
                <div>
                <label className="label-subname">Apellido: </label>
                    <input className="input-subname" onChange={datosUser} type="text" placeholder="Ingrese su apellido" name="subname" required/>
                </div>
                <div>
                    <label className="label-number">Número: </label>
                    <input className="input-number" onChange={datosUser} type="phone" placeholder="Ingrese su número" name="number" required/>
                </div>
                <div>
                    <label className="label-direc">Domicilio: </label>
                    <input className="input-direc" onChange={datosUser} type="text" placeholder="Ingrese su domicilio" name="direc" required/>
                </div>
                <div>
                    <label className="label-email">Email: </label>
                    <input className="input-direc" onChange={datosUser} type="email" placeholder="Ingrese su email" name="email"/>
                </div>
                <div>
                    <label className="label-email">Repita su email: </label>
                    <input className="input-direc"  type="email" placeholder="Repita su email" name="email" onChange={((e)=>setValidateEmail(e.target.value))} />
                </div>
                <button className="btn-enviar" type='submit' disabled={validateEmail !== user.email}>Enviar</button>
            </form>
        </div>} 
    </div>
    )
}


export default CheckOut