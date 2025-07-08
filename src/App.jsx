import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import ListaProductos from "./Components/ListaProductos";
import HomePage from "./pages/Home";
import PageProductos from "./pages/Productos";
import PageCarrito from "./pages/Carrito";

function App() {
  return (
    <div className="APP">
      <Header />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route path="/products" element={<PageProductos />} />
        <Route path="/carrito" element= {<PageCarrito />} />
      </Routes>

    </div>
  );
}

export default App;
