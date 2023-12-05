import Navbar_Superior from "./Navbar_superior";
import Navbar_Intermedio from "./Navbar_Intermedio";
import "./Navbar.css";

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
                <li className="linav">Inicio</li>
                <li className="linav">Tienda
                
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
                <li className="linav">Hombre</li>
                <li className="linav">Top Productos</li>
                <li className="linav">Mujer</li>
                <li className="linav">Blogs</li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
    </>
  )
}

export default Navbar