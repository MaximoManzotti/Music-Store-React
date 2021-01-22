import './Checkout_Style.css'
import { useContext } from "react";
import { Store } from "../../store/index";


function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);

    console.log(data)

    return(
<form className="Formulario">
  <label>
    Nombre:
    <input type="text" name="name" />
  </label>
  <label>
    Apellido:
    <input type="text" name="name" />
  </label>
  <label>
    Email:
    <input type="text" name="name" />
  </label>
  <label>
    Confirmar Email:
    <input type="text" name="name" />
  </label>
  <label>
    Tarjeta:
    <input type="text" name="name" />
  </label>
  <label>
    Fecha de Vencimiento:
    <input type="text" name="name" />
  </label>
  <label>
    Codigo de seguridad:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    )
}

export default Checkout