function Carrito({ carrito, onCambiarCantidad, onEliminarProducto, mostrar, onCerrar }) {
  
  // Función para calcular total de productos
  const calcularTotalProductos = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0)
  }
  
  // Función para calcular precio total
  const calcularPrecioTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  }

  // Si no se debe mostrar, no renderizar nada
  if (!mostrar) return null

  return (
    <div className="carrito-overlay">
      <div className="carrito">
        
        {/* Header del carrito */}
        <div className="carrito-header">
          <h2>Mi Carrito ({calcularTotalProductos()} productos)</h2>
          <button onClick={onCerrar} className="btn-cerrar">×</button>
        </div>

        {/* Contenido del carrito */}
        <div className="carrito-contenido">
          {carrito.length === 0 ? (
            <p className="carrito-vacio">Tu carrito está vacío</p>
          ) : (
            <>
              {/* Lista de productos en el carrito */}
              {carrito.map(item => (
                <div key={item.id} className="item-carrito">
                  
                  <img src={item.imagen} alt={item.nombre} />
                  
                  <div className="info-item">
                    <h4>{item.nombre}</h4>
                    <p>${item.precio}</p>
                  </div>
                  
                  {/* Controles de cantidad */}
                  <div className="controles-cantidad">
                    <button 
                      onClick={() => onCambiarCantidad(item.id, item.cantidad - 1)}
                      disabled={item.cantidad <= 1}
                    >
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button 
                      onClick={() => onCambiarCantidad(item.id, item.cantidad + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  {/* Precio total del producto */}
                  <div className="precio-total">
                    ${item.precio * item.cantidad}
                  </div>
                  
                  {/* Botón eliminar */}
                  <button 
                    onClick={() => onEliminarProducto(item.id)}
                    className="btn-eliminar"
                  >
                    🗑️
                  </button>
                </div>
              ))}
              
              {/* Total del carrito */}
              <div className="carrito-total">
                <h3>Total: ${calcularPrecioTotal()}</h3>
                <button className="btn-comprar">Proceder al pago</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Carrito