function TarjetaProducto({ nombre, precio, imagen, marca, disponible, onAgregarCarrito }) {
  return (
    <div className="tarjeta-producto">
      <img src={imagen} alt={nombre} />
      
      <div className="info-producto">
        <h3>{nombre}</h3>
        <p className="marca">{marca}</p>
        <p className="precio">${precio}</p>
        
        {disponible ? (
          <button 
            onClick={() => onAgregarCarrito({ nombre, precio, imagen, marca })}
            className="btn-agregar"
          >
            Añadir al carrito
          </button>
        ) : (
          <button className="btn-agotado" disabled>
            Agotado
          </button>
        )}
      </div>
    </div>
  )
}

export default TarjetaProducto