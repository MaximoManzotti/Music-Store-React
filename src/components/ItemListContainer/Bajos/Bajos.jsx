import '../../ItemListContainer/style_Instrumentos.css';
import Bajo_Fender from '../../assets/BajoFender.jpg';
import Bajo_Hofner from '../../assets/Hofner.jpg';
import Bajo_Squier from '../../assets/BajoSquier.jpg'
import Counter from '../../Counter/counter';
import Loading from '../../assets/loading.gif'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
function Bajos() {
       const [items, setItems] = useState([]);
       const Guitarras = [
              {
                     id: 1,
                     Marca: 'Fender',
                     Modelo: 'Stratocaster',
                     Imagen: Bajo_Fender,
                     descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                     Precio: '$50000',
                     Quantity: 3
              },
              {
                id: 2,
                Marca: 'Hofner',
                Modelo: 'Paul McCartney',
                Imagen: Bajo_Hofner,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                Precio: '$50000',
                Quantity: 7
         },
         {
            id: 3,
            Marca: 'Squier',
            Modelo: 'Strastocaster',
            Imagen: Bajo_Squier,
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
            Precio: '$50000',
            Quantity: 3
     },];
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
              {(items.map(u =>  
                     <div className='Producto' key={u.id}>
                     <p className='txt_producto'>{u.Marca} {u.Modelo}</p>
                     <img src={u.Imagen} alt="Bajo" className="Foto_instrumento" />
                     <p className='txt_producto'>{u.Precio}</p>
                     <Counter Quantity={u.Quantity} />
                      <Link to={`/bajos/${u.id}`}>Ver Mas</Link>
                      </div> 
              ))}
       </> : <div>
                     <img src={Loading} alt="Cargando..." />
                     <p className='txt_cargando'>Cargando</p>
              </div>
       }</section>
       )
}
export default Bajos