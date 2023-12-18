import "./Inicio.css";
import Navbar from "../../Navbar/Navbar";
import TarjetaCompra from "../../Aditamentos/TarjetaCompra/TarjetaCompra";



const Inicio = () => {
    return ( 
        <>
        <Navbar/>
            {/* primera seccion  */}
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

            {/* segunda seccion   */}
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

            {/* tercera seccion  */}
            <section className="contenedorSeccion3">
                <div className="contenidoSeccion3">
                    <div className="contenInfo3">
                        <div className="contenInf3">
                            <div className="info3">
                                <a className="aInfo3" href="#">
                                    <img src="https://tabbase.myshopify.com/cdn/shop/files/3_1.jpg?v=1649851424" alt="zapatllas nike ordenasas en fila" className=" imgInfo3" width="1890" height="500" />
                                </a>
                            </div>
                            <div className="contentText3">
                                <div className="contenText3">
                                    <div>
                                        <h2 className="hText3">Las mejores colecciones</h2>
                                        <h4 className="h4Text3">Las mejores colecciones en todo tipo de zapatillas </h4>
                                        <a className="aText3" href="#">Descubre mas</a>
                                    </div>
                                </div>

                                {/* <div className="contenPromoSeccion3">
                                    <div className="contenPromo3">
                                        <div className="promo1Seccion3">
                                            <div className="promo1">
                                              <ul>

                                              </ul>
                                            </div>
                                        </div>
                                        <div className="promo2Seccion3">

                                        </div>
                                    </div>
                                </div> */}

                                <ul className="contenBanner">
                                    <li className="banner">
                                        <a href="#0" className="imgContenedor">
                                            <img className="banner1" src="https://www.ansonika.com/allaia/img/banner_1.jpg" alt="zapatilla" />

                                            <div className="infoBannerContainer">
                                                <h3 className="h3Banner">Colección de hombre</h3>
                                                <div className="divBanner">
                                                    <button className="botonBanner">
                                                    comprar ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="banner">
                                        <a href="#0" className="imgContenedor">
                                            <img className="banner1" src="https://www.ansonika.com/allaia/img/banner_2.jpg" alt="zapatilla" />

                                            <div className="infoBannerContainer">
                                                <h3 className="h3Banner">Colección de Mujer</h3>
                                                <div className="divBanner">
                                                    <button className="botonBanner">
                                                    comprar ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="banner">
                                        <a href="#0" className="imgContenedor">
                                            <img className="banner1" src="https://www.ansonika.com/allaia/img/banner_3.jpg" alt="zapatilla" />

                                            <div className="infoBannerContainer">
                                                <h3 className="h3Banner">Colección de Niños</h3>
                                                <div className="divBanner">
                                                    <button className="botonBanner">
                                                    comprar ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>

            </section>
        </>

    )
}

export default Inicio