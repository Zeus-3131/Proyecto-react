import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aditamentos/Aside/Aside";
import Footer from "../Footer/Footer";

const ItemListContainer = ({mostrarComponentes=true}) => {
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
      {mostrarComponentes && <Navbar />}
      <div className="contenedorDivDelListContainer">
        {mostrarComponentes && <Aside />}
        <div className="contenedorProductosItemListContainer">
          <h2 className="itemh2">mis productos</h2>
          <ItemList productos={productos} />
        </div>
      </div>
      {mostrarComponentes && <Footer />}
    </>
  );
};

export default ItemListContainer;
