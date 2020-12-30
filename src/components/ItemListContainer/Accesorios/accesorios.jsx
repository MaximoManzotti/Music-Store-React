import '../../ItemListContainer/style_Instrumentos.css';
import Kit_Pedales from '../../assets/kit_pedales.jpg'
import CorreaAnimalPrint from '../../assets/Correa_Animal_Print.jpg'
import CorreaPatronAzul from '../../assets/Correa_Patron_Azul.jpg'
import Counter from '../../Counter/counter';
import Loading from '../../assets/loading.gif'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
function Bajos() {
       const [items, setItems] = useState([]);
       const Accesorios = [
              {
                     id: 1,
                     Marca: 'Varios',
                     Modelo: 'Pedales',
                     Imagen: Kit_Pedales,
                     descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                     Precio: '$50000',
                     Quantity: 3
              },
              {
                id: 2,
                Marca: 'Strap',
                Modelo: 'Correa',
                Imagen: CorreaAnimalPrint,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                Precio: '$50000',
                Quantity: 7
         },
         {
            id: 3,
            Marca: 'Strap',
            Modelo: 'Correa',
            Imagen: CorreaPatronAzul,
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
            Precio: '$50000',
            Quantity: 9
     },];
       const getProducts = new Promise((resolve, reject) => {
              setTimeout(() => {
                     resolve(Accesorios);
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
                      <Link to={`/category/accesorios/${u.id}`} className='VerMas'>Ver Mas</Link>
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