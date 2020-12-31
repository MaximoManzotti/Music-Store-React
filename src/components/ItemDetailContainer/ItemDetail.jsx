import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Instrumentos from '.././ItemListContainer/ProductList/productlist'
 const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
   

   

    const getProduct = new Promise((resolve, reject) => {
        let lista = Instrumentos.filter(detalle => detalle.id === id)
        console.log(lista)
        setTimeout(() => {
            resolve( {
                id: id, 
                Marca: lista.Marca,
                Imagen: lista.Imagen,
                Modelo: lista.Modelo,
                descripcion: lista.descripcion,
                Precio: lista.precio,
                Quantity: lista.Quantity
            } )
        }, 500);
    });
    useEffect(() => {
        console.log(id);
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    return (
        <>
            { product ?
                <div className="container">
                    <section>
                      <p>  El id del producto seleccionado es: {id}</p>
                      <div></div>
                    
                    </section>
                </div> : 
                <p>Cargando producto...</p> }
        </>
    )
}
export default Detail;