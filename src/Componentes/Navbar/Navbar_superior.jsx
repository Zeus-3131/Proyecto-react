import './Navbar_Superior.css';
import CartWidget from '../Aditamentos/CartWidget/CartWidget.jsx';





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
          <CartWidget/>
        </div>
      </div>
    </header>
  );
}

export default Navbar_Superior