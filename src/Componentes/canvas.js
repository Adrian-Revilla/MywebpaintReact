import React from 'react'

const Canvas = (props) => {
  return (<div id="canvas_container">
    <canvas id="canvas" width={`${props.canvasWidth}`} height="500"
      onMouseDown={props.Draw}
      onMouseMove={props.MovingDraw}    
      onMouseUp={props.outDraw}
      onMouseLeave={props.outCanvas}
    >
      CANVAS NO SE PUEDE DESPLEGAR
    </canvas>
  </div>)

}


export default Canvas;

