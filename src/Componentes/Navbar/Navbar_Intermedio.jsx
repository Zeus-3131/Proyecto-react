import './Navbar_Intermedio.css'


const Navbar_Intermedio = () => {
  return (
    <div className='contenedorNavbarIntermedio'>
      <div className='contenidoIntermedio'>
        <div className='contenidoInter'><p>SALE: 50% OFF THE SUMMER COLLECTION &nbsp; <a href="/collections" title="All Collections"><strong>Shop&nbsp;now&nbsp;&gt;</strong></a></p></div>
        <div className='contenidoInter'><img className='icono' src="./logo.png" alt="icono de la marca" /></div>
        <div className='contenidoInter'>
          <form className='contenedorBuscador' >
            <input className='buscador' type="search" placeholder="Buscar" />
            <button type="submit" className='botonBuscar'>
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar_Intermedio