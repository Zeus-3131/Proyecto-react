import "./Inicio.css";
import Navbar from "../../Navbar/Navbar";
import TarjetaCompra from "../../Aditamentos/TarjetaCompra/TarjetaCompra";
import TarjetaComprasAmplia from "../../Aditamentos/TarjetaComprasAmplia/TarjetaComprasAmplia";
import Footer from "../../Footer/Footer";



const Inicio = () => {
    return (
        <>
            <Navbar />
            {/* primera seccion  */}
            <section className="contenedorSection1">
                <div className="contenidoSeccion1">
                    <h1>La mejor<br />Coleccion del <b style={{ color: "red" }}>2024</b></h1>
                    <br />
                    <p className="pSecccion1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, libero veritatis laudantium vitae sequi aperiam dolorum eum ut rem harum cupiditate doloremque. Nihil saepe ratione et voluptates aut maiores alias.10</p>  
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
                            <TarjetaCompra imagen="https://assets.codepen.io/4164355/shoes.png" titulo="Nike Shoes" />
                            <TarjetaCompra imagen="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693817051-infinityrn-4-zapatillas-de-running-asfalto-TvSrh4.png?crop=1.00xw:0.802xh;0,0.198xh&resize=980:*" titulo="Nike Shoes" />
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

                    {/* <TarjetaComprasAmplia/>
                    <TarjetaComprasAmplia/> */}
                </div>
            </section>


            {/* cuarta seccion  */}
            <section>
                <div className="contenedorSeccion4">
                    <div className="fondoSeccion4">
                        <div className="contenSeccion4">
                            <h2 className="h2Seccion4">
                                <span>
                                    <b>Colección especial </b>
                                    de zapatos
                                </span>
                            </h2>
                            <div className="contenInfo4">
                                <TarjetaComprasAmplia />
                                <TarjetaComprasAmplia />
                                <TarjetaComprasAmplia />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* quinta seccion  */}
            <section>
                <div className="slideshow-container">
                    <div className="images">
                        <div className="image">
                            <img src="./reebok.png" alt="Imagen 1" />
                        </div>
                        <div className="image">
                            <img src="./adidas.png" alt="Imagen 2" />
                        </div>
                        <div className="image">
                            <img src="./puma.png" />
                        </div>
                        <div className="image">
                            <img src="./jordan.png" />
                        </div>
                        <div className="image">
                            <img src="./converse.png" />
                        </div>
                        <div className="image">
                            <img src="./le.png" />
                        </div>
                        <div className="image">
                            <img src="./balance.png" />
                        </div>
                        <div className="image">
                            <img src="./skech.png" />
                        </div>
                        <div className="image">
                            <img src="./nike.png" />
                        </div>
                        <div className="image">
                            <img src="./lacos.png" />
                        </div>

                    </div>
                </div>
            </section>

            <Footer/>
        </>

    )
}

export default Inicio