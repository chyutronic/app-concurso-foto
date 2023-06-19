import estilos from "./Modal.module.css";

function Closed({ estado, cambiarEstado }) {
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
                    <div>
                      <img
                        className={estilos.closed}
                        src="/drawClosed.png"
                      ></img>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Closed;
