import "./ItemDetail.css";
// import "./ItemDetail.js";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useState } from "react";
import {Link} from "react-router-dom"
import { CarritoContext } from "../../Context/CarritoContext.jsx";
import { useContext } from "react";

const ItemDetail = ({ nombre, precio, stock, id, imagen }) => {
  const [agregarCantidad,setAgregarCantidad]=useState(0);

  const {agregarAlCarrrito}=useContext(CarritoContext);

  const manejadorCantidad=(cantidad)=>{
    setAgregarCantidad(cantidad);
    
    const item={id,nombre,precio};
    agregarAlCarrrito(item,cantidad);
  }
  return (
    <>
      <h2>nombre: {nombre}</h2>
            <p>precio: {precio}</p>
            <p>id:{id}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non autem ipsam repellendus consequatur, quas aut! Vero quaerat sint esse cum aliquam sed, ex atque, ducimus in perspiciatis praesentium. Id, sit.
              pudrase
            </p>
            <img src={imagen} alt={nombre} />
            {
              agregarCantidad> 0 ?(<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }




    {/* <div className="container">
        <div className="imgBx">
            <img src="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true" alt="Nike Jordan Proto-Lyte Image"/>
        </div>
        <div className="details">
            <div className="content">
                <h2>Jordan Proto-Lyte <br/>
                    <span>Running Collection</span>
                </h2>
                <p>
                    Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                    made for all-day, bouncy comfort.
                    Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                    breathable support.
                    Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                    Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
                </p>
                <p className="product-colors">Available Colors:
                    <span className="black active" data-color-primary="#000" data-color-sec="#212121" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"></span>
                    <span className="red" data-color-primary="#7E021C" data-color-sec="#bd072d" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"></span>
                    <span className="orange" data-color-primary="#CE5B39" data-color-sec="#F18557" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"></span>
                </p>
                <h3>Rs. 12,800</h3>
                <button>Buy Now</button>
            </div>
        </div>
    </div> */}

    </>
  );
};

export default ItemDetail;
