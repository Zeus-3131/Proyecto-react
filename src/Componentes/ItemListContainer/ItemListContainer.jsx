// import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const {idCatergoria}= useParams();

  useEffect(()=>{
    const funcionProductos = idCatergoria ? getProductosPorCategoria:getProductos;

    funcionProductos(idCatergoria)
    .then(respuesta=>setProductos(respuesta))

  },[idCatergoria])

  return (
    // <h2>{greeting}</h2>
    <div>
      <h2>mis productos</h2>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer