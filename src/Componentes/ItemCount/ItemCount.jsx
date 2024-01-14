import { useState } from "react"

const ItemCount = ({inicial,stock,funcionAgregar}) => {
    const [contador, setContador]=useState(inicial);

    const sumaContador =()=>{
        if (contador < stock){
            setContador(contador+1);
        }
    }

    const restarContador=()=>{
        if(contador > inicial){
            setContador(contador-1);
        }
    }
  return (
    <div>
        <button onClick={restarContador}>-</button>
        <p style={{justifyContent:"center"}}>{contador}</p>
        <button onClick={sumaContador}>+</button>
        <button onClick={()=>funcionAgregar(contador)}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount