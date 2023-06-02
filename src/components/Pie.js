// import Link from "next/link";
import estilos from "./Pie.module.css";
import { useRouter } from "next/router";
// import { DataContext } from "@/contexts/DataContext";
// import { useContext } from "react";

function Pie() {
  // const { setLegales } = useContext(DataContext);

  // const activarLegales = () => {
  //   setLegales(true);
  // };
  const router = useRouter();

  const abrirLegales = () => {
    // router.push("/legales");
    let url = "/legales";

    window.open(url, "_blank");
  };

  return (
    <div className={estilos.contenedor}>
      <p className={estilos.texto}>
        De actievoorwaarden zijn geldig voor deelnemers vanaf 18 jaar.
        <a className={estilos.puntero} onClick={abrirLegales}>
          {" "}
          ALGEMENE VOORWAARDEN
        </a>
      </p>
    </div>
  );
}

export default Pie;
