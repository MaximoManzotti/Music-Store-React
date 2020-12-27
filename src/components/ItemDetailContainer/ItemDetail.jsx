import '../ItemDetailContainer/itemDetailStyle.css'
import Imagen_Fender from '../assets/Guitarra.jpg';
import Loading from '../assets/loading.gif';
import Counter from '../Counter/counter';

import React, { useState, useEffect } from 'react';

    const Detail = () => {
    const [items, setItems] = useState([]);
    const Guitarras = [
           {
                  id: 1,
                  Marca: 'Fender',
                  Modelo: 'Stratocaster',
                  Imagen: Imagen_Fender,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
                  Precio: '$90000',
                  Quantity: 7}];

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

    return (<section className='Detalles'>{items.length ? <>

           {(items.map(u => <div className='Detalles_instrumento' key={u.id}>
                 <div>
                  <img src={u.Imagen} alt="Guitarra_Marca_Fender" className="Foto_guitarra" />
                  </div>
                  <div>
                  <p>{u.Marca} {u.Modelo}</p>
                  <p>{u.descripcion}</p>
                  <p >{u.Precio}</p>
                  <Counter Quantity={u.Quantity} className='contador_detalles' />
                  </div>
                  </div>
           ))}


    </> : <div className='container_cargando'>
                  <div className='div_gif'>
                  <img src={Loading} alt="Cargando..." className='gif_carga'/>
                  </div>
                  <p className='txt_cargando'>Cargando</p>
           </div>
    }</section>
    )
}
    
    

export default Detail;