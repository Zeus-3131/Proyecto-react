import { useContext } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito. compra o vete</h2>
        <Link to="/">ver productos</Link>
      </>
    );
  }
  return (
    <div>
    <Navbar/>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}

      <h3>Total:$ {total}</h3>
      <h3>cantidad total:{cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()}>vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
