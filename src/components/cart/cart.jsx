import "./styleCart.css";
import { useContext } from "react";
import { Store } from "../../store";
import { ImCross } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import Loading from "../assets/loading.gif";

const Cart = () => {
  const [data, setData] = useContext(Store);
  let copyData = data;
  

  //ELIMINA TODO EL CART
  function deleteAll() {
    copyData.items = [];
    setData({
      ...copyData,
    });
    setData({
      ...copyData,
      cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
    });
    localStorage.setItem(
      "Cart",
      JSON.stringify({
        ...data,
        cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
      })
    );
  }
  //ELIMINA DONDE HAGA CLICK EL USUARIO
  function deleteItem(id) {
    let lista_filtrada = copyData.items.filter((e) => e.id === id);
    var idx = copyData.items.indexOf(lista_filtrada[0]);
    console.log(idx);
    copyData.items.splice(idx, 1);
    setData({
      ...copyData,
      cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
    });
    localStorage.setItem(
      "Cart",
      JSON.stringify({
        ...data,
        id: id,
        cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
      })
    );
  }

  return (
    <div>
      {copyData ? (
        <>
          <div className="ContenedorCarrito">
            <h1>
              Estás en el carrito
              <AiOutlineDelete
                onClick={() => {
                  deleteAll();
                }}
                style={{position:'absolute'}} />
            </h1>
            <h2>Cantidad total: {data.cantidad}</h2>
            {data.items.map((i) => (
              <h3 key="producto">
                {i.product} - {i.cantidad}
                <ImCross
                  onClick={() => {
                    deleteItem(i.id);
                  }}
                style={{position:'absolute'}}/>
              </h3>
            ))}
          </div>
        </>
      ) : (
        <div>
          <img src={Loading} alt="Cargando..." />
          <p className="txt_cargando">Cargando</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
