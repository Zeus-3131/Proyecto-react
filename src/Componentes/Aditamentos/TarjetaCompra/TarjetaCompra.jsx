import "./TarjetaCompra.css"

const TarjetaCompra = ({imagen, titulo}) => {
    return (
        <div className="contenedorTarjeta">
            <div>
                <ul className="ulTarjeta">
                    <li className="alineacionTarjeta">
                        <div className="contenedorinter">
                            <div className="margenesconten">
                                <div className="container">
                                    <div className="card">
                                        <div className="imgBx">
                                            <img src={imagen} alt={titulo}/>
                                        </div>
                                        <div className="contentBx">
                                            <h2>{titulo}</h2>
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
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TarjetaCompra