import "./Inicio.css";

const Inicio = () => {
  return (

    <section>
        <div className="contenedorSection1"> 
            <div className="contenidoSeccion1">
                <h1>La mejor<br/>Coleccion del <b style={{color:"red"}}>2024</b></h1>
                <br />
                <p className="pSecccion1"><h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, libero veritatis laudantium vitae sequi aperiam dolorum eum ut rem harum cupiditate doloremque. Nihil saepe ratione et voluptates aut maiores alias.10</h3></p>
                <br />
                <button className="botonSeccion1">Compra Ahora</button>
            </div>
            <div className="contenidoSeccion2">
                <img src="./logo2.png" alt="prueba" />
            </div>
        </div>
    </section>

  )
}

export default Inicio