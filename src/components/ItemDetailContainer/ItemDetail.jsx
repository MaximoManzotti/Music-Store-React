import "../ItemDetailContainer/itemDetailStyle.css";
import { useEffect, useState, useContext  } from "react";
import { Redirect, useParams, useHistory} from "react-router-dom";
import Instrumentos from ".././ItemListContainer/ProductList/productlist";
import Counter from "../Counter/counter";
import Loading from "../assets/loading.gif";
import {Store } from '../../store/index';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [data, setData] = useContext(Store);
  const history = useHistory();
  
  
  const onAdd = (count) => {
    setData({
        ...data, 
        cantidad: data.cantidad + count,
        items: [...data.product, product],
    }); history.push('/cart');}


    const [redirect, setRedirect] = useState(false);

  const getProduct = new Promise((resolve, reject) => {
    const lista = Instrumentos.filter((detalle) => detalle.id === Number(id));
    const lista_resuelta = lista[0];
    resolve(lista_resuelta);
  });
   
  const getProducstFromDB = async () => {
    try {
      const result = await getProduct;
      setProduct(result);
    } catch (error) {
      alert("No podemos mostrar el producto");
    }
  };

  useEffect(() => {
    getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {product ? (
        <>
          <div className="contenedor_detail">
            <div className="contenedor_imagen">
              <img
                src={product.Imagen}
                alt="Guitarra"
                className="Imagen_Detail"
              />
            </div>
            <div className="div_producto">
              <p className="Titulo_Producto">
                {product.Marca} {product.Modelo}
              </p>
              <p className="Descripcion_producto">{product.descripcion}</p>
              <p style={{ justifyContent: "center", display: "flex" }}>
                {product.Precio}
              </p>
              <Counter Quantity={product.Quantity}  addCart={onAdd} />
              <button
          className="agregar_al_carrito"
          onClick={() =>{ onAdd(); setRedirect(true)}}>
          <span id="span_1"></span>
          <span id="span_2"></span>
          <span id="span_3"></span>
          <span id="span_4"></span>
          AGREGAR AL CARRITO
        </button>
        {redirect && <Redirect to="/cart" />}
            </div>
          </div>
        </>
      ) : (
        <div>
          <img src={Loading} alt="Cargando..." />
          <p className="txt_cargando">Cargando</p>
        </div>
      )}
    </section>
  )};
export default Detail;
