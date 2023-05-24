import estilos from "./Pie.module.css";

function Pie() {
  return (
    <div className={estilos.contenedor}>
      <p className={estilos.texto}>
        De actievoorwaarden zijn geldig voor deelnemers vanaf 18 jaar.
      </p>
    </div>
  );
}

export default Pie;
