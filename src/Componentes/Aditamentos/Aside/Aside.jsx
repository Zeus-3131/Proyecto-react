import React, { useEffect } from 'react';
import './Aside.css';

const Aside = () => {
    useEffect(() => {
        const handleSectionClick = (event) => {
            const parent = event.currentTarget.closest('.filtro-seccion');
            if (parent) {
                parent.classList.toggle('active');
            }
        };

        const handleClearClick = (event) => {
            const target = event.currentTarget.dataset.target;
            const checkboxes = document.querySelectorAll(`.filtro-seccion[data-target="${target}"] input[type="checkbox"]`);
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
        };

        document.querySelectorAll('.seccion-titulo').forEach((element) => {
            element.addEventListener('click', handleSectionClick);
        });

        document.querySelectorAll('.limpiar-seccion').forEach((element) => {
            element.addEventListener('click', handleClearClick);
        });

        return () => {
            document.querySelectorAll('.seccion-titulo').forEach((element) => {
                element.removeEventListener('click', handleSectionClick);
            });

            document.querySelectorAll('.limpiar-seccion').forEach((element) => {
                element.removeEventListener('click', handleClearClick);
            });
        };
    }, []);

    return (
        <aside>
            <h2>Filtrar por:</h2>

            <div className="filtro-seccion" data-target="en_stock">
                <h3 className="seccion-titulo">Disponibilidad <span className="flecha"></span></h3>
                <ul className="estilos-filtro">
                    <li><label><input type="checkbox" value="en_stock" /> En stock</label></li>
                    <li><label><input type="checkbox" value="agotado" /> Agotado</label></li>
                </ul>
                <button className="limpiar-seccion" data-target="en_stock">Limpiar</button>
            </div>

            <div className="filtro-seccion" data-target="precio">
                <h3 className="seccion-titulo">Precio <span className="flecha">▶</span></h3>
                <ul className="estilos-filtro">
                    <li><label><input type="checkbox" value="menos_50" /> Menos de $50</label></li>
                    <li><label><input type="checkbox" value="50_100" /> $50 - $100</label></li>
                </ul>
                <button className="limpiar-seccion" data-target="precio">Limpiar</button>
            </div>

            {/* Repetir para los demás filtros */}

            <div className="filtro-seccion" data-target="tipo_producto">
                <h3 className="seccion-titulo">Tipo de Producto <span className="flecha">▶</span></h3>
                <ul className="estilos-filtro">
                    <li><label><input type="checkbox" value="zapatillas" /> Zapatillas</label></li>
                    <li><label><input type="checkbox" value="tenis" /> Tenis</label></li>
                </ul>
                <button className="limpiar-seccion" data-target="tipo_producto">Limpiar</button>
            </div>

            <div className="filtro-seccion" data-target="color">
                <h3 className="seccion-titulo">Color <span className="flecha">▶</span></h3>
                <ul className="estilos-filtro">
                    <li><label><input type="checkbox" value="rojo" /> Rojo</label></li>
                    <li><label><input type="checkbox" value="azul" /> Azul</label></li>
                    <li><label><input type="checkbox" value="negro" /> Negro</label></li>
                    <li><label><input type="checkbox" value="blanco" /> Blanco</label></li>
                </ul>
                <button className="limpiar-seccion" data-target="color">Limpiar</button>
            </div>

            <div className="filtro-seccion" data-target="tamaño">
                <h3 className="seccion-titulo">Tamaño <span className="flecha">▶</span></h3>
                <ul className="estilos-filtro">
                    <li><label><input type="checkbox" value="35" /> 35</label></li>
                    <li><label><input type="checkbox" value="36" /> 36</label></li>
                    <li><label><input type="checkbox" value="37" /> 37</label></li>
                    <li><label><input type="checkbox" value="38" /> 38</label></li>
                </ul>
                <button className="limpiar-seccion" data-target="tamaño">Limpiar</button>
            </div>
        </aside>
    );
};

export default Aside;
