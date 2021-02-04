import "./styleCart.css";
import { useContext } from "react";
import { Store } from "../../store";
import { ImCross } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import Loading from "../../assets/loading.gif";
import { useHistory } from "react-router-dom";

const Carrito = () => {
  const [data, setData] = useContext(Store);
  let copyData = data;
  let precio_total = [];
  let resultado_total = 0;
  const history = useHistory();

  function PrecioTotal() {
    data.items.map((i) => precio_total.push(i.Precio * i.cantidad));
    resultado_total = Number( precio_total.reduce((acc, item) => (acc += item), 0))
  }PrecioTotal()

  //ELIMINA TODO EL CART

  function EliminarTodo() {
    copyData.items = [];
    setData({
      ...copyData,
    });
    setData({
      ...copyData,
      cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
      precio: data.items.Precio,

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

  function EliminarItem(id) {
    let lista_filtrada = copyData.items.filter((e) => e.id === id);
    var idx = copyData.items.indexOf(lista_filtrada[0]);
    console.log(idx);
    copyData.items.splice(idx, 1);
    setData({
      ...copyData,
      cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
      precio: data.items.Precio,

    });
    localStorage.setItem(
      "Cart",
      JSON.stringify({
        ...data,
        id: id,
        cantidad: data.items.reduce((acc, i) => acc + i.cantidad, 0),
        precio: data.items.Precio,
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
                  EliminarTodo();
                }}
                style={{ position: "absolute", marginLeft: "0.5em" }}
              />
            </h1>
            <div className="Precio_Cantidad">
              <h3 className="Precio_total">Precio total: ${resultado_total}</h3>
              <h3 className="Cantidad_total">
                Cantidad total: {data.cantidad}
              </h3>
            </div>
            {data.items.map((i) => (
              <h4 key="producto">
                {i.cantidad} {i.product} - ${i.Precio * i.cantidad}
                <ImCross
                  onClick={() => {
                    EliminarItem(i.id);
                  }}
                  style={{ position: "absolute", marginLeft: "1em" }}
                />
              </h4>
            ))}
            <button className='irCheckOut'
              onClick={() => {
                history.push("/checkout");
              }}
            >
              Pasar a Comprar
            </button>
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
export default Carrito;
