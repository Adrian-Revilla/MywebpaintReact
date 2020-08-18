import React from 'react';
// import pic from '../assets/images/interrogativo.png';

const Opciones = (props) => {
  return (
    <>
      <h2>
        <i className="fas fa-palette" style={{ fontSize: '30px', color: `${props.BrushColor}` }}></i>
        <span style={{color: `${props.BrushColor}` }}>{`${props.BrushColorName}`}</span>
      </h2>

      <button id="red" onClick={props.ChangeColor}><i className="fas fa-tint"></i> Rojo</button>
      <button id="green" onClick={props.ChangeColor}><i className="fas fa-leaf"></i> Verde</button>
      <button id="blue" onClick={props.ChangeColor}><i className="fas fa-water"></i> Azul</button>
      <button id="limpiar_partes" onClick={props.CanvasIconEraser} ><i className="fas fa-eraser"></i> Borrador</button>
      <button id="limpiar" onClick={props.cleanAll} ><i className="fas fa-backspace"></i> Limpiar</button>
      <button id="help" onClick={props.DisplayModal} ><i className="far fa-question-circle" style={{ fontSize: '30px' }}  ></i></button>

    </>
  );
}

export default Opciones;