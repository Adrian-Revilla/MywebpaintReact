import React from 'react'

const Canvas = (props) => {
  return (<div id="canvas_container">
    <canvas width={`${props.CanvasWidthSize}`} height="500"
      id="canvas"
      className={`${props.CanvasIcon}`} 
      onMouseDown={props.StartDraw}
      onMouseMove={props.MovingDraw}    
      onMouseUp={props.OutDrawOrOutCanvas}
      onMouseLeave={props.OutDrawOrOutCanvas}
    >
      El canvas no esta soportado
    </canvas>
  </div>
  )

}


export default Canvas;

