// import '../ItemDetailContainer/itemDetailStyle.css'
// // import Imagen_Fender from '../assets/Guitarra.jpg';
// // import Loading from '../assets/loading.gif';
// import Counter from '../Counter/counter';

// import React, { useState, useEffect } from 'react';

//   function Detail(id, Marca, Modelo,Imagen,  descripcion,  Precio, Quantity) {

       import {useEffect, useState} from 'react';
       import {useParams} from 'react-router-dom';
       import ProductDetail from './ItemDetailConteiner';

       const Detail = () => {
           const {id} = useParams();
           const [product, setProduct] = useState(null);
       
           const getProduct = new Promise((resolve, reject) => {
               setTimeout(() => {
                   resolve({
                       id: id, 
                       nombre: "Producto de prueba",
                       foto: "http://placehold.it/350x400",
                       descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam deleniti neque! Explicabo aspernatur accusantium ex provident natus, nam neque nesciunt eaque iure dolore, architecto maiores corrupti deserunt totam. Veniam.",
                       precio: 400
                   })
               }, 500);
           });
       
           useEffect(() => {
               getProduct
               .then(response => setProduct(response))
               .catch(error => console.log(error));
           // eslint-disable-next-line react-hooks/exhaustive-deps
           }, []);
       
           return (
               <>
                   {
                       product ?
                       <div className="container">
                           <ProductDetail item={product} />
       
                           <section>
                               El id del producto seleccionado es: {id}
                           </section>
                       </div> : 
                       <p>Cargando producto...</p>
                   }
               </>
           )
       }
       
       export default Detail;
//     const [items, setItems] = useState([]);
//     const Guitarras = [
//            {
//                   id: 1,
//                   Marca: 'Fender',
//                   Modelo: 'Stratocaster',
//                   Imagen: Imagen_Fender,
//                   descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.' ,
//                   Precio: '$90000',
//                   Quantity: 7}];

//     const getProducts = new Promise((resolve, reject) => {
//            setTimeout(() => {
//                   resolve(Guitarras);
//            },4000)
//     })

//     const getProducstFromDB = async () => {
//            try {
//                   const result = await getProducts;
//                   setItems(result);
//            } catch (error) {
//                   alert('No podemos mostrar los productos en este momento');
//            }
//     }

//     useEffect(() => {
//            getProducstFromDB();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])

//     return (<div className='Detalles_instrumento' key={id}>
//                  <div>
//                   <img src={Imagen} alt="Guitarra_Marca_Fender" className="Foto_guitarra" />
//                   </div>
//                   <div>
//                   <p>{Marca} {Modelo}</p>
//                   <p>{descripcion}</p>
//                   <p >{Precio}</p>
//                   <Counter Quantity={Quantity} className='contador_detalles' />
//                   </div>
//                   </div>
//            )}


//     </> : <div className='container_cargando'>
//                   <div className='div_gif'>
//                   <img src={Loading} alt="Cargando..." className='gif_carga'/>
//                   </div>
//                   <p className='txt_cargando'>Cargando</p>
//            </div>
//     }</section>
//     )
// }
    
    

// export default Detail;