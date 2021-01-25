import "./paginaNoEncontrada.css";
import { SiDiscogs } from "react-icons/si";

function pagina_no_disponible() {

  return (
    <div className="error">
      <div className="disco_texto">
        {" "}
        4 <SiDiscogs style={{ fontSize: "0.8em" }} /> 4{" "}
      </div>
      <h2>PAGINA NO ENCONTRDA</h2>
    </div>
  );
}

export default pagina_no_disponible;
