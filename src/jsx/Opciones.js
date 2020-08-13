import React from 'react';
const Opciones = () => {
  return (
    <React.Fragment>
      <h2 ondragstart="return false;" ondrop="return false;">Colores disponibles:</h2>

      <div>
        <button id="red">red</button>
        <button id="green">green</button>
        <button id="blue">blue</button>
        <button id="limpiar_partes">borrador</button>
        <button id="limpiar">limpiar</button>
      </div>
    </React.Fragment>
  );
}

export default Opciones;