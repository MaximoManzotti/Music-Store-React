import '../ItemDetailContainer/itemDetailStyle.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Instrumentos from '.././ItemListContainer/ProductList/productlist'
import Counter from '../Counter/counter'
import Loading from '../assets/loading.gif'

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);


    // console.log(lista)


    const getProduct = new Promise((resolve, reject) => {
        const lista = Instrumentos.filter(detalle => detalle.id === Number(id))
        const lista_resuelta = lista[0]
        resolve(lista_resuelta)
        console.log(product.Quantity)
    });

    const getProducstFromDB = async () => {
        try {
            const result = await getProduct;
            setProduct(result);
        } catch (error) {
            alert('No podemos mostrar el producto');
        }
    }


    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<section >{product ? <>
        <div className='contenedor_detail'>
            <div className='contenedor_imagen'>
                <img src={product.Imagen} alt="Guitarra" className='Imagen_Detail' />
            </div>
            <div >
                <p className='Titulo_Producto'>{product.Marca} {product.Modelo}</p>
                <p>{product.descripcion}</p>
                <p style={{ justifyContent: 'center', display: 'flex' }}>{product.Precio}</p>
                <Counter Quantity={product.Quantity} />
               
            </div>

        </div>


    </> : <div>
            <img src={Loading} alt="Cargando..." />
            <p className='txt_cargando'>Cargando</p>
        </div>
    }</section>
    )
}
export default Detail;