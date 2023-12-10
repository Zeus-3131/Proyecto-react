import "./Inicio.css";
import TarjetaCompra from "../TarjetaCompra/TarjetaCompra";

const Inicio = () => {
    return (

        <>
            <section className="contenedorSection1">
                <div className="contenidoSeccion1">
                    <h1>La mejor<br />Coleccion del <b style={{ color: "red" }}>2024</b></h1>
                    <br />
                    <p className="pSecccion1"><h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, libero veritatis laudantium vitae sequi aperiam dolorum eum ut rem harum cupiditate doloremque. Nihil saepe ratione et voluptates aut maiores alias.10</h3></p>
                    <br />
                    <button className="botonSeccion1">Compra Ahora</button>
                </div>
                <div className="contenidoSeccion-1">
                    <img src="./logo2.png" alt="prueba" />
                </div>
            </section>

            <section className="contenidoSeccion2">
                <div className="conteSeccion2">
                    <div className="contenedorpromo">
                        <div className="promocion1">
                            <img className="imgpromo1" src="https://tabbase.myshopify.com/cdn/shop/files/1_5.jpg?v=1650439204" alt="zapatillas negras " />
                            <div className="textpromo">
                                <div>
                                    <h2 className="promoh">Las mejores colecciones</h2>
                                    <h4 className="promoh">Colección de zapatos de cuero</h4>
                                    <h5 className="promoh5"><strong>50% de descuento</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mitadSeccion2">
                        <h2 className="seccion2H">Productos mejor valorados</h2>
                        <div className="tarjetas">
                            <TarjetaCompra />
                            <TarjetaCompra />
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Inicio