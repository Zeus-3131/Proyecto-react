import './Navbar_superior.css';


function Navbar_superior() {
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
          <li className='carrito'>CARRITO</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar_superior