import Navbar_Superior from "./Navbar_superior";
import Navbar_Intermedio from "./Navbar_Intermedio";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
        <Navbar_Superior/>
        <Navbar_Intermedio/>

        <div className="contenedorNavbar">
          <div className="contenidoNav">
            <nav className="nav">
              <ul className="ulnav">
                <li className="linav"><a className="anav"  href="#">Inicio</a></li>
                <li className="linav"><a className="anav"  href="#">Tienda</a></li>
                <li className="linav"><a className="anav"  href="#">Hombre</a></li>
                <li className="linav"><a className="anav"  href="#">Top Productos</a></li>
                <li className="linav"><a className="anav"  href="#">Mujer</a></li>
                <li className="linav"><a className="anav"  href="#">Blogs</a></li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
  )
}

export default Navbar