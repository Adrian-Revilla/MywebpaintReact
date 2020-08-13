
import React from 'react';



const GuiaRapida = () => {
  return (
    
     
      <div className="guia_rapida_div">
  
          <div className="banner">
            <i className='fas fa-paint-brush' style={{ fontSize: '40px', color: 'white' }}></i><h3>GUÍA RÁPIDA</h3>
          </div>
  
          <div className="reglas">
            <p> ✓ Dibuja en el navegador presionando click izquierdo y moviendolo a traves del lienzo.</p>
            <p> ✓ Para cambiar el color del trazo, haz click en uno de los botones de la derecha; el color por defecto es  <span style={{ color: 'red' }}><b>ROJO</b></span></p>
            <p> ✓ &check; Para limpiar una zona del lienzo haz click en el botón "<i>borrador</i>" mientras lo desplazas por la pantalla</p>
            <p> ✓ Para limpiar el lienzo haz click en el botón "<i>limpiar</i>".</p>
            <p> <span style={{ fontSize: '30px' }}>&#9888;</span> NO MODFICAR LA VENTANA DEL NAVEGADOR MIENTRAS SE ESTÁ DIBUJANDO </p>
          </div>  
      </div>
  )
}

export default GuiaRapida;