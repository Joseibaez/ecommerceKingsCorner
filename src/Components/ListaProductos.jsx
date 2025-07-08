import TarjetaProducto from "./TarjetaProductos"

function ListaProductos({ productos, titulo  }) {
  return (
    <div className="lista-productos">
      <h2>{titulo}</h2>
      <p>Mostrando {productos.length} productos</p>
      
      {productos.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <div>
          {productos.map(producto => (
            <TarjetaProducto
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              marca={producto.marca}
              disponible={producto.disponible}
              
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListaProductos