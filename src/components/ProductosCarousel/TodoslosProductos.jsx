import './styleProducts.css'
import Loading from '../assets/loading.gif';
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Instrumentos from '../ItemListContainer/ProductList/productlist';
import Carrousel from 'react-elastic-carousel';

const breakPoints = [
    {width: 1,  itemsToShow: 1 },
    {width: 550, itemsToShow:2 },
    {width: 768, itemsToShow:3 },
    {width: 1200, itemsToShow: 4 }
]

function Productos() {

     const [items, setItems] = useState([]);
   
     
         useEffect(() => {
              getProducstFromDB();
              // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])

     
       const getProducts = new Promise((resolve, reject) => {
                     resolve(Instrumentos);
       })
       const getProducstFromDB = async () => {
              try {
                     const result = await getProducts;
                     setItems(result);
              } catch (error) {
                     alert('No podemos mostrar los productos en este momento');
              }
       }

       return (<section className='contenedor_instrumentos_carrousel'>{ items.length ? <>
           <Carrousel breakPoints={breakPoints} >
              {( Instrumentos.map(u =>
                     <Link to={`/items/${u.id}`} className='VerMas'>
                            <div className='Producto' key={u.id}>
                                   <p className='txt_producto'>{u.Marca} {u.Modelo}</p>
                                   <img src={u.Imagen} alt="Guitarra" className="Foto_instrumento" />
                                   <p className='txt_producto'>{u.Precio}</p>
                            </div>
                    </Link>
              ))}
              </Carrousel>
       </> : <div>
                     <img src={Loading} alt="Cargando..." />
                     <p className='txt_cargando'>Cargando</p>
              </div>
       }</section>
       )
}
export default Productos