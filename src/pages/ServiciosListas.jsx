import { Link } from "react-router-dom";

export function ServiciosListas({ servicios }) {
  return (
    <>
      <h2>LISTAS</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/services/${servicio.id}`}>{servicio.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
