import './style_guitarras.css';
import Imagen_Fender from '../../assets/Guitarra.jpg';
import Imagen_Epiphone from '../../assets/epiphone.jpg';
import Imagen_Telecaster from '../../assets/telecaster.jpg';
import Counter from '../../Counter/counter';
import Loading from '../../assets/loading.gif'
import React, { useState, useEffect } from 'react'

function Guitarras() {
       const [items, setItems] = useState([]);
       const Guitarras = [
              {
                     id: 1,
                     Marca: 'Fender',
                     Modelo: 'Stratocaster',
                     Imagen: Imagen_Fender,
                     descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                     Precio: '$90000',
                     Quantity: 7
              },
              {
                     id: 2,
                     Marca: 'Epiphone',
                     Modelo: 'Casino',
                     Imagen: Imagen_Epiphone,
                     descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                     Precio: '$80000',
                     Quantity: 10
              }, {
                     id: 3,
                     Marca: 'Fender',
                     Modelo: 'Telecaster',
                     Imagen: Imagen_Telecaster,
                     descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                     Precio: '$60000',
                     Quantity: 4
              }];
       const getProducts = new Promise((resolve, reject) => {
              setTimeout(() => {
                     resolve(Guitarras);
              },4000)
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

              {(items.map(u => <div className='Producto' key={u.id}>
                     <p className='txt_producto'>{u.Marca} {u.Modelo}</p>
                     <img src={u.Imagen} alt="Guitarra_Marca_Fender" className="Foto_guitarra" />
                     <p className='txt_producto'>{u.Precio}</p>
                     <Counter Quantity={u.Quantity} /> </div>
              ))}


       </> : <div>
                     <img src={Loading} alt="Cargando..." />
                     <p className='txt_cargando'>Cargando</p>
              </div>
       }</section>
       )
}
export default Guitarras
