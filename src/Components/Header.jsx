import "./Header.css";
import { Link } from "react-router-dom";


function Header({onSearch,  }) {
  return (
    <header>
      <div>
        <div className="Titulo">
          <Link to="/">
          <h1>React E-commerce</h1>
          <img src="./vite.svg" alt="logo" />
          </Link> 
          
        </div>

        <navbar>
          <Link to="/productos"> Productos</Link>
        </navbar>

        <div className="search-section"> 
          <input 
            type="text" 
            placeholder="🔎 Busca tu producto"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
          <button>Buscar</button>
        </div>
        
        <div className="cart-section">
          <Link to ="/carrito"> Crrito</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
