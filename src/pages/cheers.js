import Pie from "@/components/Pie";
import estilos from "./cheers.module.css";
import { DataContext } from "@/contexts/DataContext";
import { useContext, useEffect } from "react";
import BotonIntranet from "@/components/BotonIntranet";
import { useRouter } from "next/router";

function Cheers() {
  const { intranet, logeado } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    document.title = "Concert at Sea / Cheers";

    if (logeado === false) {
      router.push("/");
    }

    const timer = setTimeout(() => {
      // Aquí puedes llamar a la función que deseas ejecutar después de un tiempo determinado
      // router.push("/");
      location.reload();

      console.log("La función se ejecutó después de 8 segundos");
    }, 8000); // 8000 milisegundos = 10 segundos

    // Importante: Limpia el temporizador en el momento en que el componente se desmonta o cuando useEffect se vuelva a ejecutar.
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
              <div>
                <img
                  className={estilos.botellaCel}
                  src="/catsBotellaCel.png"
                ></img>
                {/* <img className={estilos.botella} src="/catsBotella.png"></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pie />
    </div>
  );
}

export default Cheers;
