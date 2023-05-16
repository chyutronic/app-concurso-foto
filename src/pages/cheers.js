import Pie from "@/components/Pie";
import estilos from "./cheers.module.css";
import { DataContext } from "@/contexts/DataContext";
import { useContext } from "react";
import BotonIntranet from "@/components/BotonIntranet";

function Cheers() {
  const { intranet } = useContext(DataContext);

  return (
    <div>
      <div className={estilos.ventanaModal}>
        <div className={estilos.contenedorModal}>
          {intranet && <BotonIntranet />}
          <div className={estilos.nav}>
            <div>
              <img
                className={estilos.gatoVolador}
                src="/catsGatoVolador.svg"
              ></img>
              <div className={estilos.saludo}>CHEERS!</div>
              <div>
                <h3 className={estilos.titulo}>
                  Je doet nu mee aan de actie, succes!
                </h3>
              </div>
              <div className={estilos.logo}>
                <img className={estilos.logos} src="/catsLogoConcert.svg"></img>
              </div>
              <img
                className={estilos.botellaCel}
                src="/catsBotellaCel.png"
              ></img>
            </div>
            <img className={estilos.botella} src="/catsBotella.png"></img>
          </div>
        </div>
      </div>
      <Pie />
    </div>
  );
}

export default Cheers;
