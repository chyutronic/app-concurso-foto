import { useRouter } from "next/router";
import estilos from "./BotonIntranet.module.css";

function BotonIntranet() {
  const router = useRouter();

  function entrarIntranet() {
    router.push("/intranet");
  }

  return (
    <div>
      <div className={estilos.contenedorBoton}>
        <button className={estilos.boton} onClick={() => entrarIntranet()}>
          INTRANET
        </button>
      </div>
    </div>
  );
}

export default BotonIntranet;
