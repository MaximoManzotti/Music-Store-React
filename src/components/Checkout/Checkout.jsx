import "./Checkout_Style.css";
import { useContext, useState } from "react";
import { Store } from "../../store/index";
import { getFirestore } from "../../DB/index";
import firebase from "firebase/app";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(Store);
  const [venta, completoVenta] = useState(false);
  const [idCompra, setIdCompra] = useState("");
  const db = getFirestore();
  const orders = db.collection("Ventas");
  let precio_total = [];
  let resultado_total = 0;
  let cantidades_productos = [];
  


  function cantidades() {
    data.items.map((i) =>
      cantidades_productos.push({ cantidad: i.cantidad, id: i.id })
    );
    cantidades_productos.forEach((e) => {
      db.collection("Productos").doc(e.id)
        .get()
        .then((i) => {
          console.log(i.data().Quantity - e.cantidad);
        });
    });
  }
  cantidades();

  data.items.map((i) => precio_total.push(i.Precio * i.cantidad));
  resultado_total = Number(
    precio_total.reduce((acc, item) => (acc += item), 0)
  );
  function Total() {
    setData({
      ...data,
      total: resultado_total,
    });
  }

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmacionemail: "",
    telefono: "",
    tarjeta: "",
    expiracion: "",
    codigoseguridad: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setForm((oldform) => ({ ...oldform, [name]: value }));
    };
  };

  const ventas = {
    users: form,
    items: data.items,
    total: data.total,
    data: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    orders
      .add(ventas)
      .then(({ id }) => {
        completoVenta(true);
        setIdCompra(id);
      })
      .catch((e) => console.log(e));
  };

  return !venta ? (
    <form className="Formulario" onSubmit={handleSubmitForm}>
      <input
        required
        min="2"
        type="text"
        value={form.nombre}
        name="nombre"
        placeholder="Nombre"
        onChange={set("nombre")}
      />

      <input
        required
        type="text"
        value={form.apellido}
        name="apellido"
        placeholder="Apellido"
        onChange={set("apellido")}
      />

      <input
        required
        type="text"
        value={form.email}
        name="email"
        placeholder="Email"
        onChange={set("email")}
      />
      <input
        required
        type="text"
        value={form.confirmacionemail}
        name="confirmacionemail"
        placeholder="Confirmacion Email"
        onChange={set("confirmacionemail")}
      />
      <input
        required
        type="text"
        value={form.telefono}
        name="telefono"
        placeholder="Telefono"
        onChange={set("telefono")}
      />

      <input
        required
        type="text"
        value={form.tarjeta}
        name="tarjeta"
        placeholder="Tarjeta"
        onChange={set("tarjeta")}
      />

      <input
        required
        type="text"
        value={form.expiracion}
        name="expiracion"
        placeholder="Fecha de Expiracion"
        onChange={set("expiracion")}
      />

      <input
        required
        type="text"
        value={form.codigoseguridad}
        name="codigoseguridad"
        placeholder="Codigo de Seguridad"
        onChange={set("codigoseguridad")}
      />

      <button type="submit" onClick={() => Total()}>
        Pagar
      </button>
    </form>
  ) : (
    <p>
      {" "}
      La compra se realizó correctamente, tu código de seguimiento es:{" "}
      {idCompra}{" "}
    </p>
  );
}

export default Checkout;
