import Navbar from "../../Navbar/Navbar"
import { NavLink } from "react-router-dom"
import "./Hombre.css"
import Footer from "../../Footer/Footer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemListTienda from "../../ItemListTienda/ItemListTienda"
import { getProductos, getProductosPorCategoria } from "../../../asyncmock"

const Hombre = ({mostrarComponentesTienda = true}) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, [idCategoria]);
  return (
    <div>
     {mostrarComponentesTienda && <Navbar />}
      <div className="ContenedorNavegacionHombre">
        <nav className="navProductosHombre">
          <div className="col-12Hombre">
            <NavLink className="enlacePHombre" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faHombre fa-angle-right" />
            </span>
            <span>Hombre</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListHombre">
        <div className="contenedorProductosItemListHombre">
          <h2 className="itemh2Hombre">Productos para Hombre</h2>
          <ItemListTienda productos={productos} />
        </div>
      </div>
      {mostrarComponentesTienda && <Footer />}
    </div>
  )
}

export default Hombre