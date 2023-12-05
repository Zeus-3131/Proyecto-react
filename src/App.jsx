import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Navbar from "./Componentes/Navbar/Navbar";
import Inicio from "./Componentes/Cuerpo/Inicio/Inicio.jsx";



function App() {
  return (
    <div>
    <Navbar/>
    <Inicio/>
    <ItemListContainer greeting="Hola mundo"/>
    </div>
  );

}

export default App