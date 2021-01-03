import '../../ItemListContainer/style_Instrumentos.css';
import Loading from '../../assets/loading.gif';
import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import Instrumentos from '../ProductList/productlist';

function Instrumento() {

     const [items, setItems] = useState([]);
     const { instrumentos } = useParams() ;
     
         useEffect(() => {
              getProducstFromDB();
              // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [instrumentos])

      const lista = Instrumentos.filter(e => e.categoria === instrumentos)
       const getProducts = new Promise((resolve, reject) => {
                     resolve(lista);
       })
       const getProducstFromDB = async () => {
              try {
                     const result = await getProducts;
                     setItems(result);
              } catch (error) {
                     alert('No podemos mostrar los productos en este momento');
              }
       }

       return (<section className='contenedor_instrumentos'>{ items.length ? <>
              {(items.map(u =>
               
                     <Link to={`/items/${u.id}`} className='VerMas'>
                            <div className='Producto' key={u.id}>
                                   <p className='txt_producto'>{u.Marca} {u.Modelo}</p>
                                   <img src={u.Imagen} alt="Guitarra" className="Foto_instrumento" />
                                   <p className='txt_producto'>{u.Precio}</p>
                            </div>
                    </Link>

              ))}
       </> : <div>
                     <img src={Loading} alt="Cargando..." />
                     <p className='txt_cargando'>Cargando</p>
              </div>
       }</section>
       )
}
export default Instrumento