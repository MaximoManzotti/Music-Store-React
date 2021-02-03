import "./Checkout_Style.css";
import { useContext, useState } from "react";
import { Store } from "../../store/index";
import { getFirestore } from "../../DB/index";
import firebase from "firebase/app";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(Store);
  const [sell, completeSell] = useState(false);
  const [time, setTime] = useState();
  const [idSold, setId] = useState("");
  const db = getFirestore();
  
  const orders = db.collection("Ventas");
  let totalPrice = [];
  let totalResult = 0;
  let quantityProducts = [];


  function functionQuantitys() {
    data.items.map((i) =>
      quantityProducts.push({ cantidad: i.cantidad, id: i.id })
    );
    quantityProducts.forEach((e) => {
      db.collection("Productos").doc(e.id)
        .get()
        .then((i) => {
          db.collection("Productos").doc(e.id).update({
            Quantity: (i.data().Quantity - e.cantidad)

        })
    })
  })}


  data.items.map((i) => totalPrice.push(i.Precio * i.cantidad));
  totalResult = Number(
    totalPrice.reduce((acc, item) => (acc += item), 0)
  );
  function Total() {
    setData({
      ...data,
      total: totalResult,
    });
  }
 

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmationemail: "",
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
        completeSell(true);
        setId(id);
      setTime(JSON.stringify(ventas.data.toDate()))
      })
      .catch((e) => console.log(e));
  };

let email = "Los Emails No Coinciden"
let disableEmail = true
   if(form.email === form.confirmacionemail){
         email = ""
         disableEmail = false
      }

  

  return !sell ? (
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
        type="date"
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
    <p> {email}</p>
      <button type="submit" onClick={() => {Total(); functionQuantitys();}} disabled={disableEmail} >
        Pagar
      </button>
    </form>
  ) : (
    <>
<p>{time}</p>
    <p>
      La compra se realizó correctamente, tu código de seguimiento es:
      {idSold}
    </p>
</>
  );
  
}

export default Checkout;
