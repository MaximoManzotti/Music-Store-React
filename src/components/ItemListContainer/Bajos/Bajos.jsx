import '../../ItemListContainer/style_Instrumentos.css';

import Loading from '../../assets/loading.gif'
import React, { useState, useEffect } from 'react'
import Instrumentos from '../ProductList/productlist'

import { Link } from 'react-router-dom';
function Bajos() {
       const [items, setItems] = useState([]);
       let lista = Instrumentos.filter(bajo => bajo.categoria === 'Bajos')

       const getProducts = new Promise((resolve, reject) => {
              setTimeout(() => {
                     resolve(lista);
              }, 4000)
       })
       const getProducstFromDB = async () => {
              try {
                     const result = await getProducts;
                     setItems(result);
              } catch (error) {
                     alert('No podemos mostrar los productos en este momento');
              }
       }
       useEffect(() => {
              getProducstFromDB();
              // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])
       return (<section className='contenedor_instrumentos'>{items.length ? <>
              {(items.map(u =>
                     <Link to={`/category/bajos/${u.id}`} className='VerMas'>
                            <div className='Producto' key={u.id}>
                                   <p className='txt_producto'>{u.Marca} {u.Modelo}</p>
                                   <img src={u.Imagen} alt="Bajo" className="Foto_instrumento" />
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
export default Bajos