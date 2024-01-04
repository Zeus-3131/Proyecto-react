import Navbar from "../../Navbar/Navbar";
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import { NavLink } from "react-router-dom";
import "./Productos.css";
import Aside from "../../Aditamentos/Aside/Aside";
import Footer from "../../Footer/Footer";

// segunda entrega
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";


const Productos = () => {
  return (
    <>
      <Navbar />
      <div className="ContenedorNavegacionProductos">
        <nav className="navProductos">
          <div className="col-12">
            <NavLink className="enlaceP" to="/">
              Inicio
            </NavLink>
            <span>
              <i class="fa fa-angle-right" />
            </span>
            <span>Calzado especial</span>
          </div>
        </nav>
      </div>

      <main>
        <h1 className="h1Productos">Calzado especial</h1>
        <div className="contenedormainProductos">
          <Aside />
          <div className="contenedorDeProductos">
            <div>
              <h3>header provisional</h3>
              <header>
                <nav>
                  <ul>
                    <NavLink to="/productos">inicio</NavLink><br />
                    <NavLink to="/categoria/:idCategoria">puma</NavLink><br />
                    <NavLink to="/categoria/:idItem">nike</NavLink>
                  </ul>
                </nav>
              </header>
            </div>
            {/* <header>
              <h3>header provisional</h3>
              <BrowserRouter>
                <Routes>
                  <Route path="/productos" element={<ItemListContainer />} />
                  <Route
                    path="/categoria/:idCategoria"
                    element={<ItemListContainer />}
                  />
                  <Route
                    path="/categoria/:idItem"
                    element={<ItemDetailContainer />}
                  />
                </Routes>
              </BrowserRouter>
            </header> */}
            <br /><br /><br />
            <ItemListContainer />
          </div>
        </div>
      </main>

      <Footer />
      {/* <h1>productos online</h1> */}
    </>
  );
};

export default Productos;
