

function Carrito({ carrito, onCambiarCantidad, onEliminarProducto, mostrar, onCerrar }) {
  
  // --- FUNCIONES INTERNAS DE CÁLCULO ---

  /**
   * Calcula la cantidad total de productos en el carrito.
   * Utiliza el método `reduce` para iterar sobre el array `carrito`.
   * `reduce` "reduce" el array a un único valor.
    El número total de unidades de productos.
   */
  const calcularTotalProductos = () => {
    // `total` es el acumulador (inicia en 0, el segundo argumento de reduce).
    // `item` es cada elemento del array `carrito` en la iteración actual.
    // En cada paso, sumamos la `cantidad` del `item` actual al `total`.
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };
  
  /**
   * Calcula el precio total de todos los productos en el carrito.
   * También usa `reduce` para sumar los subtotales de cada producto.
   * return El costo total de la compra.
   */
  const calcularPrecioTotal = () => {
    // Similar al anterior, pero en cada paso, calculamos el subtotal (precio * cantidad)
    // y lo sumamos al acumulador `total`.
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  // --- RENDERIZADO CONDICIONAL ---

  // Esta es una guarda (guard clause). Si la prop `mostrar` es `false`,
  // el componente retorna `null`, lo que significa que no renderizará nada en el DOM.
  // Es una forma muy limpia y eficiente de ocultar/mostrar componentes.
  if (!mostrar) return null;

  // --- ESTRUCTURA JSX (LO QUE SE VA A RENDERIZAR) ---
  return (
    
    <div>

      {/* `carrito`: Es el contenedor principal del panel del carrito. */}
      <div className="carrito">
        
        {/* Header del carrito */}
        <div className="carrito-header">
          {/* Título dinámico que muestra el número total de productos llamando a nuestra función. */}
          <h2>Mi Carrito ({calcularTotalProductos()} productos)</h2>
          {/* Botón para cerrar. Al hacer clic, llama a la función `onCerrar` del componente padre. */}
          <button onClick={onCerrar} >×</button>
        </div>

        {/* Contenido principal del carrito */}
        <div className="carrito-contenido">
          {/* Renderizado condicional con un operador ternario. */}
          {/* Si el carrito está vacío (`carrito.length === 0`), muestra un mensaje. */}
          {carrito.length === 0 ? (
            <p >Tu carrito está vacío</p>
          ) : (
            // Si no está vacío, usamos un Fragment (<>) para agrupar los elementos sin añadir un nodo extra al DOM.
            <>
              {/* Iteramos sobre el array `carrito` usando `map` para renderizar cada producto. */}
              {/* `map` transforma cada `item` del array en un elemento JSX. */}
              {carrito.map(item => (
                // `key={item.id}`
                // La prop `key` ayuda a React a identificar qué elementos han cambiado, se han añadido o eliminado.
                // Debe ser un identificador único y estable para cada elemento de la lista.
                <div key={item.id} >
                  
                  {/* Muestra la imagen del producto. */}
                  <img src={item.imagen} alt={item.nombre} />
                  
                  {/* Información del producto (nombre y precio unitario). */}
                  <div>
                    <h4>{item.nombre}</h4>
                    <p>${item.precio}</p>
                  </div>
                  
                  {/* Controles para aumentar o disminuir la cantidad. */}
                  <div >
                    {/* Botón para disminuir. */}
                    <button 
                      // Al hacer clic, llama a `onCambiarCantidad` pasando el id y la cantidad actual - 1.
                      onClick={() => onCambiarCantidad(item.id, item.cantidad - 1)}
                      // Se deshabilita si la cantidad es 1 para no permitir cantidades de 0 o negativas.
                      disabled={item.cantidad <= 1}
                    >
                      -
                    </button>
                    {/* Muestra la cantidad actual. */}
                    <span>{item.cantidad}</span>
                    {/* Botón para aumentar. */}
                    <button 
                      // Al hacer clic, llama a `onCambiarCantidad` pasando el id y la cantidad actual + 1.
                      onClick={() => onCambiarCantidad(item.id, item.cantidad + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  {/* Muestra el precio subtotal para este producto (precio * cantidad). */}
                  <div className="precio-total">
                    ${item.precio * item.cantidad}
                  </div>
                  
                  {/* Botón para eliminar el producto completo del carrito. */}
                  <button 
                    // Al hacer clic, llama a la función `onEliminarProducto` del padre, pasándole el `id` del item.
                    onClick={() => onEliminarProducto(item.id)}
                    className="btn-eliminar"
                  >
                    🗑️
                  </button>
                </div>
              ))}
              
              {/* Footer del carrito con el resumen total. */}
              <div className="carrito-total">
                {/* Muestra el precio final llamando a nuestra función de cálculo. */}
                <h3>Total: ${calcularPrecioTotal()}</h3>
                <button className="btn-comprar">Proceder al pago</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación.
export default Carrito;