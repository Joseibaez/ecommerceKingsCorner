import Productos from '../assets/Productos';
import ListaProductos from '../Components/ListaProductos';

function PageProductos ({productos}) {

    return (
        <>
         <main>
        <h1>Mi E-Commerce</h1>
        <ListaProductos productos={productos} titulo="Nuestros Productos" />
      </main> 
        </>
    )
}
export default PageProductos