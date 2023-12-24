// import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta => {
        setProductos(respuesta)
      })
  }, [])

  return (
    // <h2>{greeting}</h2>
    <div>
      <h2>mis productos</h2>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer