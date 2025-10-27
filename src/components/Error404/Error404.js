import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'; // opcional si quieres darle estilo

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Error 404 página no encontrada</h2>
      <p>La ruta que intentas acceder no existe o fue movida.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default Error;
