import { useContext } from "react"
import { CarritoContext } from "../../../Context/CarritoContext"



// prueba icono 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartItem = ({item,cantidad}) => {
    const{eliminarProducto}=useContext(CarritoContext);
    // const{cantidadTotal}=useContext(CarritoContext);

  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>cantidad:{cantidad}</p>
        <p>precio: {item.precio}</p>
        <button onClick={()=>eliminarProducto(item.id)}>eliminar producto</button>
        <hr />
    </div>
  )
  
}

export default CartItem