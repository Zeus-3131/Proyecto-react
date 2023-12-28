import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Navbar from "../Componentes/Navbar/Navbar.jsx";
import Inicio from "./Componentes/Paginas/Inicio/Inicio";
import Tienda from "./Componentes/Paginas/Tienda/Tienda";
import Hombre from "./Componentes/Paginas/Hombre/Hombre";
import Productos from "./Componentes/Paginas/Productos/Productos";
import Mujer from "./Componentes/Paginas/Mujer/Mujer";
import Blogs from "./Componentes/Paginas/Blogs/Blogs";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Tienda" element={<Tienda/>}/>
        <Route path="/Hombre" element={<Hombre/>}/>
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Mujer" element={<Mujer/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/" element={<Inicio/>}/>
        <Route path="*" element={<img src="https://b97-719386.smushcdn.com/719386/wp-content/uploads/2021/05/Enmascarar-grupo-48.png?lossy=1&strip=1&webp=1" alt="Error 404" width={"100%"} height={"100%"} style={{margin:"0" }}/>}/>

        {/* rutas de los productos  */}
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

    {/* <Navbar/> */}
    {/* <Inicio/> */}
    {/* <ItemListContainer greeting="Hola mundo"/> */}
    </div>
  );

}

export default App