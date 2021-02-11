import './ItemListContainerStyles.css';
import '../NavBar/CartWidget'

function ListaContainer(show) {
  return <>    
     <p className={ show.show ? 'lista_de_productos' : 'lista_de_productos_close' }>Productos</p>
  </>
}

export default ListaContainer