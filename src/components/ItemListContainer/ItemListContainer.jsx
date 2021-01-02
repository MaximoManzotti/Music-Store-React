import './ItemListContainerStyles.css';
import '../NavBar/CartWidget'

function ItemListContainer(show) {
  return <>    
     <p className={ show.show ? 'lista_de_productos' : 'lista_de_productos_close' }>Productos</p>
  </>
}

export default ItemListContainer