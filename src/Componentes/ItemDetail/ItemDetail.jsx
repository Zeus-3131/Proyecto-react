import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext.jsx";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const ItemDetail = ({ nombre, precio, stock, id, imagen }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrrito(item, cantidad);
  };
  return (
    <>
      <h2>nombre: {nombre}</h2>
            <p className="pDetail">precio: {precio}</p>
            <p>id:{id}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non autem ipsam repellendus consequatur, quas aut! Vero quaerat sint esse cum aliquam sed, ex atque, ducimus in perspiciatis praesentium. Id, sit.</p>
            <img src={imagen} alt={nombre} />
            {
              agregarCantidad> 0 ?(<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }

    
    </>
  );
};

export default ItemDetail;
