import '../../ItemListContainer/style_Instrumentos.css';
import Bateria_Spears from '../../assets/BateriasSpears.jpg'
import Bateria_Pdp from '../../assets/Bateria_doble.jpg';
import Bateria_Ludivig from '../../assets/Bateria_Comic.jpg'
import Counter from '../../Counter/counter';
import Loading from '../../assets/loading.gif'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
function Bajos() {
       const [items, setItems] = useState([]);
       const Guitarras = [
              {
                     id: 1,
                     Marca: 'Spears',
                     Modelo: 'Madera y Negro',
                     Imagen: Bateria_Spears,
                     descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                     Precio: '$50000',
                     Quantity: 3
              },
              {
                id: 2,
                Marca: 'PDP',
                Modelo: 'Doble, Madera y Negro',
                Imagen: Bateria_Pdp,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                Precio: '$50000',
                Quantity: 7
         },
         {
            id: 3,
            Marca: 'Ludivig',
            Modelo: 'Comic',
            Imagen: Bateria_Ludivig,
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
            Precio: '$50000',
            Quantity: 9
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
                      <Link to={`/baterias/${u.id}`}>Ver Mas</Link>
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