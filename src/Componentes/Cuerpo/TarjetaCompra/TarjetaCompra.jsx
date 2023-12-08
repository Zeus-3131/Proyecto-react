import "./TarjetaCompra.css"

const TarjetaCompra = () => {
    return (
        <div className="contenedorTarjeta">
            <div>
                <ul className="ulTarjeta">
                    <li className="alineacionTarjeta">
                        <div className="contenedorinter">
                            <div className="margenesconten">
                                <div className="contenImg">
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
                                <span className="etiqueta2">New!</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TarjetaCompra