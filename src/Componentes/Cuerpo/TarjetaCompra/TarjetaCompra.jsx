import "./TarjetaCompra.css"

const TarjetaCompra = () => {
    return (
        <div className="contenedorTarjeta">
            <div>
                <ul className="ulTarjeta">
                    <li className="alineacionTarjeta">
                        <div className="contenedorinter">
                            <div className="margenesconten">
                                {/* <div className="contenImg">
                                    <div className="ImgConten">
                                        <div className="ImgDiv">
                                            <img src="https://tabbase.myshopify.com/cdn/shop/products/15_1_dfcad812-3f77-49fa-aedd-55d050321f6b_493x.jpg?v=1650701327" alt="zapatillas blancas" />
                                        </div>
                                    </div>
                                </div>
                                <a className="etiquetasImg">
                                    <div className="etiquetaVenta">
                                        <div className="contenEtiqueta">
                                            <span className="contenEtiqueta">Venta</span>
                                        </div>
                                    </div>
                                </a>
                                <span className="etiqueta2">New!</span> */}
                                <div className="container">
                                    <div className="card">
                                        <div className="imgBx">
                                            <img src="https://assets.codepen.io/4164355/shoes.png"/>
                                        </div>
                                        <div className="contentBx">
                                            <h2>Nike Shoes</h2>
                                            <div className="size contenInfo info2">
                                                <h3>Size :</h3>
                                                <span>7</span>
                                                <span>8</span>
                                                <span>9</span>
                                                <span>10</span>
                                            </div>
                                            <div className="color contenInfo">
                                                <h3>Color :</h3>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <a className="contenInfo" href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <h3 className="TituloTarjeta">
                                    <a href="">Sport running Sneakers</a>
                                </h3>
                                <div>
                                    
                                </div>
                            </div> */}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TarjetaCompra