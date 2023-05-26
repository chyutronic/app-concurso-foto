import estilos from "./Modal.module.css";
import Pie from "./Pie";

function Modal({ estado, cambiarEstado }) {
  return (
    <>
      {estado && (
        <div>
          <div>
            <div className={estilos.ventanaModal}>
              <div className={estilos.contenedorModal}>
                <div className={estilos.contenedorColumnas}>
                  <div className={estilos.columna}>
                    <img
                      className={estilos.gatoVoladorCostado}
                      src="/catsGatoVoladorCostado.svg"
                    ></img>
                  </div>
                  <div className={estilos.columnaFormulario}>
                    <div className={estilos.logo}>
                      <img
                        className={estilos.logos}
                        src="/catsLogoConcert.svg"
                      ></img>
                      <img
                        className={estilos.logos}
                        src="/catsLogoGatoNegro.svg"
                      ></img>
                    </div>
                    <div className={estilos.saludo}>HALLO!</div>
                    <div>
                      <h3 className={estilos.titulo}>
                        Ben je 18 jaar of ouder?
                      </h3>
                    </div>
                    <div className={estilos.contenedorBotones}>
                      <button
                        className={estilos.boton}
                        onClick={() => {
                          cambiarEstado(false);
                          document.title = "Concert at Sea / Form";
                        }}
                      >
                        JA
                      </button>
                      <p className={estilos.botonSeparador}>/</p>
                      <div className={estilos.boton}>
                        <a href="https://www.google.com/">NEE</a>
                      </div>
                    </div>
                    <div>
                      <img
                        className={estilos.gatoVolador}
                        src="/catsGatoVolador.svg"
                      ></img>
                    </div>
                  </div>
                  <div className={estilos.columna}>
                    <img className={estilos.botella} src="/bot3.png"></img>
                  </div>
                </div>
              </div>
            </div>
            {/* <Pie /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
