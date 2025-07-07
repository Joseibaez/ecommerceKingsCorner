import './App.css'
import Header from './Components/Header'
import productos from './assets/Productos'
import ListaProductos from './Components/ListaProductos'


function App() {

  

  return (
    <div className='APP'>
      <Header carCount={5} 
      />

      <main>

      <h1>Mi E-Commerce</h1>
      <ListaProductos
          productos={productos}
          titulo="Nuestros Productos"

        />
      </main>

      
      
    </div>
  )
}

export default App
