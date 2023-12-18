import Navbar_Superior from "./Navbar_superior";
import Navbar_Intermedio from "./Navbar_Intermedio";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <Navbar_Superior/>
    <Navbar_Intermedio/>
    <header className="navbarMovil">
        <div className="contenedorNavbar">
          <div className="contenidoNav">
            <nav className="nav">
              <ul className="ulnav">
                <li className="linav"><NavLink to="/">Inicio</NavLink></li>
                <li className="linav"><NavLink to="/Tienda">Tienda</NavLink>
                
                {/* <ul id="menu1">
                  <li>
                    <div>
                      <div>
                        <div>
                                                esquema para realizar los vaners o desplegables del navbar
                        </div>
                      </div>
                    </div>
                  </li>
                </ul> */}
                
                </li>
                <li className="linav"><NavLink to="/Hombre">Hombre</NavLink></li>
                <li className="linav"><NavLink to="/Productos">Top Productos</NavLink></li>
                <li className="linav"><NavLink to="/Mujer">Mujer</NavLink></li>
                <li className="linav"><NavLink to="/BLogs">Blogs</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
    </>
  )
}

export default Navbar