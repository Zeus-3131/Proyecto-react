import Navbar from "../../Navbar/Navbar"
import { NavLink } from "react-router-dom"
import "./Tienda.css"
import Footer from "../../Footer/Footer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemListTienda from "../../ItemListTienda/ItemListTienda"
import { getProductos, getProductosPorCategoria } from "../../../asyncmock"

const Tienda = ({mostrarComponentesTienda = true}) => {
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
    <>
       {mostrarComponentesTienda && <Navbar />}
      <div className="ContenedorNavegacionTienda">
        <nav className="navProductosTienda">
          <div className="col-12Tienda">
            <NavLink className="enlacePTienda" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faTienda fa-angle-right" />
            </span>
            <span>Tienda</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListTienda">
        <div className="contenedorProductosItemListTienda">
          <h2 className="itemh2Tienda">Nuestros Productos</h2>
          <ItemListTienda productos={productos} />
        </div>
      </div>
      {mostrarComponentesTienda && <Footer />}
    </>
  )
}

export default Tienda