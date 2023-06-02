import Link from "next/link";
import estilos from "./Pie.module.css";
import { DataContext } from "@/contexts/DataContext";
import { useContext } from "react";

function Pie() {
  const { setLegales } = useContext(DataContext);

  return (
    <div className={estilos.contenedor}>
      <p className={estilos.texto}>
        De actievoorwaarden zijn geldig voor deelnemers vanaf 18 jaar.
        <Link href="/legales">
          <a onClick={setLegales(true)}></a> ALGEMENE VOORWAARDEN
        </Link>
      </p>
    </div>
  );
}

export default Pie;
