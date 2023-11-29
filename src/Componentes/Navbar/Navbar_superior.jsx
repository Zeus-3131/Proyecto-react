import './Navbar_Superior.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';



function Navbar_Superior() {
  return (
    <header>
      <div className='contenNavbar'> 
        <div className='NavbarCuenta'>
          <ul>
          <li>MI CUENTA</li>
          <li>FAVORITOS</li>
          </ul>
        </div>
        <div className='NavbarParrafo'>
          <p>FREE U.S. SHIPPING $98+ &nbsp;|&nbsp; FREE RETURNS &nbsp;|&nbsp; BEST PRICE GUARANTEED</p>
          </div>
        <div className='NavbarCarrito'>
          <ul>
          <li><FontAwesomeIcon className='carrito' bounce size="sm" icon={faCartArrowDown} />3</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar_Superior