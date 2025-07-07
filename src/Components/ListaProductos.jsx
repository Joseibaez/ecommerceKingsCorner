import TarjetaProducto from "./TarjetaProductos"

function ListaProductos({ productos, titulo, onAgregarCarrito }) {
  return (
    <div className="lista-productos">
      <h2>{titulo}</h2>
      <p>Mostrando {productos.length} productos</p>
      
      {productos.length === 0 ? (
        <p className="sin-productos">No hay productos disponibles</p>
      ) : (
        <div className="grid-productos">
          {productos.map(producto => (
            <TarjetaProducto
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              marca={producto.marca}
              disponible={producto.disponible}
              onAgregarCarrito={onAgregarCarrito}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListaProductos