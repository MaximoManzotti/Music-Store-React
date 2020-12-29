import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ItemDetailConteiner';
 const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
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
        console.log(id);
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
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