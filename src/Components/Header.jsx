import "./Header.css";

function Header({ carCount, onSearch, onCartClick }) {
  return (
    <header>
      <div>
        <div className="Titulo">
          <h1>React E-commerce</h1>
          <img src="./vite.svg" alt="logo" />
        </div>

        <div className="search-section"> 
          <input 
            type="text" 
            placeholder="🔎 Busca tu producto"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
          <button>Buscar</button>
        </div>
        
        <div className="cart-section">
          <button onClick={onCartClick} className="cart-button">
            Carrito 🛒
            {carCount > 0 && <span>{carCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
