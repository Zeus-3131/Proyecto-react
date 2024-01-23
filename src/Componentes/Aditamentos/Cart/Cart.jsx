import { useContext } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    const confirmar = window.confirm("No hay productos en el carrito. ¿Deseas ver productos?");
    
    if (confirmar) {
      // Si el usuario hace clic en "Aceptar", redirige a la página de productos
      window.location.href = "/Productos";
    }
    // No es necesario manejar la otra opción, ya que si el usuario hace clic en "Cancelar" o cierra el cuadro de diálogo, no hacemos nada.
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
