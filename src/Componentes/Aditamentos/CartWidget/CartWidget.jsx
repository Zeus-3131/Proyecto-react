import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  // const { cantidadToltal } = useContext(CarritoContext);
  // <CartItem/>
  const { cantidadTotal } = useContext(CarritoContext);

  //  const numeroImagen = cantidadToltal > 0 ? <strong>{cantidadToltal}</strong>:"";
  //  const numeroImagen1 = cantidadTotal > 0 && <strong>{cantidadTotal}</strong>;
  return (
    <div className="cartdiv">
      <ul className="cartul">
        <Link className="cartLink" to="/cart">
          <li className="cartLi">
            <FontAwesomeIcon className="carrito" bounce size="sm" icon={faCartArrowDown}
            />
            {/* <img className="pruebacarrrito" src="https://cdn-icons-png.flaticon.com/512/2611/2611181.png" alt="carrito de compras" /> */}
           {/* <p className="cartp"> {cantidadTotal > 0 && <strong className="carritost">{cantidadTotal}</strong> }</p> */}
            {console.log("cantidadToltal:", cantidadTotal)}
            {/* {numeroImagen1} */}
            {/* <CartItem/> */}
            {/* {cantidadTotal} */}
            {cantidadTotal > 0 && <strong className="carritost">{cantidadTotal}</strong>}
            {/* {cantidadTotal} */}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default CartWidget;
