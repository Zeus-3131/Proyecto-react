// // import "./ItemListContainer.css"
// // import { useState, useEffect } from "react"
// // import { getProductos, getProductosPorCategoria } from "../../asyncmock";
// // import ItemList from "../ItemList/ItemList";
// // import { useParams } from "react-router-dom";

// // // importaciones para el itemlistcontainer para dar forma a la pagina de categorias
// // import Navbar from "../Navbar/Navbar";
// // import Aside from "../Aditamentos/Aside/Aside";
// // import Footer from "../Footer/Footer";

// // const ItemListContainer = () => {
// //   const [productos, setProductos] = useState([]);

// //   const {idCategoria}= useParams();

// //   useEffect(()=>{
// //     const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

// //     funcionProductos(idCategoria)
// //     .then(respuesta=>setProductos(respuesta))

// //   },[idCategoria])

// //   return (
// //     <>
// //       <Navbar/>
// //       <div className="contenedorDivDelListContainer">
// //       <Aside/>
// //       <div className="contenedorProductosItemListContainer">
// //       <h2 className="itemh2">mis productos</h2>
// //       <ItemList productos = {productos}/>
// //       </div>
// //       </div>
// //       <Footer/>
// //     </>
// //   )
// // }

// // export default ItemListContainer

// import { useState, useEffect } from "react";
// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Aside from "../Aditamentos/Aside/Aside";
// import Footer from "../Footer/Footer";

// const ItemListContainer = ({ showNavbar, showAside, showFooter }) => {
//   const [productos, setProductos] = useState([]);
//   const { idCategoria } = useParams();

//   useEffect(() => {
//     const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

//     funcionProductos(idCategoria)
//       .then(respuesta => setProductos(respuesta))
//       .catch(error => console.error("Error al obtener productos:", error));
//   }, [idCategoria]);

//   return (
//     <>
//       {showNavbar || <Navbar />}
//       <div className="contenedorDivDelListContainer">
//         {showAside && <Aside />}
//         <div className="contenedorProductosItemListContainer">
//           <h2 className="itemh2">mis productos</h2>
//           <ItemList productos={productos} />
//         </div>
//       </div>
//       {showFooter && <Footer />}
//     </>
//   );
// };

// export default ItemListContainer;

// lo que genero chatgpt

// import "./ItemListContainer.css"
// import { useState, useEffect } from "react";
// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
// import ItemList from "../ItemList/ItemList";
// import { useParams, useLocation } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Aside from "../Aditamentos/Aside/Aside";
// import Footer from "../Footer/Footer";

// const ItemListContainer = () => {
//   const [productos, setProductos] = useState([]);
//   const { idCategoria } = useParams();
//   const location = useLocation();

//   useEffect(() => {
//     const funcionProductos = idCategoria
//       ? getProductosPorCategoria
//       : getProductos;

//     funcionProductos(idCategoria)
//       .then((respuesta) => setProductos(respuesta))
//       .catch((error) => console.error("Error al obtener productos:", error));
//   }, [idCategoria]);

//   const showAdditionalContent = location.pathname.startsWith("/categoria");

//   return (
//     <>
//       {showAdditionalContent && (
//         <>
//           <Navbar />
//           <div className="contenedorDivDelListContainer">
//             <Aside />
//             <div className="contenedorProductosItemListContainer">
//               <h2 className="itemh2">mis productos</h2>
//               <ItemList productos={productos} />
//             </div>
//           </div>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default ItemListContainer;

// segunda manera chatgpt

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

  // const showAdditionalContent =
  // idCategoria && location.pathname.startsWith(`/categoria/${idCategoria}`) ;

  // const showAdditionalContent = location.pathname.startsWith("/Productos") || location.pathname.startsWith("/categoria");



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
