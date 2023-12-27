import Navbar from "../../Navbar/Navbar"
import ItemListContainer from "../../ItemListContainer/ItemListContainer"
import { NavLink } from "react-router-dom"
import "./Productos.css";
import Aside from "../../Aditamentos/Aside/Aside";

const Productos = () => {
  return (
    <>
      <Navbar/>
      <div className="ContenedorNavegacionProductos">
        <nav className="navProductos">
          <div className="col-12">
            <NavLink className="enlaceP" to="/">Inicio</NavLink>    
            <span><i class="fa fa-angle-right"/></span>     
            <span>Calzado especial</span>
          </div>
        </nav>
      </div>

      <main>
        <div className="h1Productos">
          <h1 className="h1Productos">Calzado especial</h1>
        </div>

        <div className="contenedorMainSuperior">
          <div className="ladosMain">
            <div className="contendorInferior">
              <Aside/>
            </div>
          </div>
        </div>
      </main>
        <h1>productos online</h1>
        <ItemListContainer/>
    </>
  )
}

export default Productos