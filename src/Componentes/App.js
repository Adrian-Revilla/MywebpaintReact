import React, { useState, useEffect } from 'react';
import Header from './Header'
import Canvas from './canvas'
import Opciones from './Opciones';
import Menu from './Menu';

// import GuiaRapida from './GuiaRapida';
// puedo importar asi url('${logo}')
// o  asi  import logo from '../assets/images/logo.svg';

const App = () => {

  //CONTEXTO DE CANVAS API
  let [CanvasContext, setCanvasContext] = useState('');

  // SIZE DEL CANVAS
  let [CanvasWidthSize, setCanvasWidthSize] = useState('');

  //ICONO ACTUAL DEL <CANVAS></CANVAS
  let [CanvasIcon, setCanvasIcon] = useState('Brush');

  //DETECTAR CUANDO EL MOUSE ESTA PRESIONADO
  let [IsMousePressed, setIsMousePressed] = useState(false);

  // COLOR DEL PINCEL O BRUSH, 
  let [BrushColor, SetBrushColor] = useState('rgb(52, 52, 151)');

  //EL NOMBRE DEL COLOR ACTUAL EN EL H2 DE OPCIONES
  let [BrushColorName, SetBrushColorName] = useState(' Azul');

  let [VisibleModal, setVisibleModal] = useState(['none', 'MyModal']);
  

  // CONTEXTO DE LA API CANVAS
  useEffect(() => setCanvasContext(document.querySelector('canvas').getContext('2d')), [CanvasContext])


  // AJUSTAR EL TAMAÑO DEL <CANVAS></CANVAS>
  // math.trunc quita los decimales del offset width
  useEffect(() => {
    let CanvasContainerOffsetWidth;

    if (CanvasWidthSize === '') {
      CanvasContainerOffsetWidth = document.getElementById('canvas_container').offsetWidth;
      setCanvasWidthSize(Math.trunc(CanvasContainerOffsetWidth));
    }

    window.addEventListener('resize', () => {
      CanvasContainerOffsetWidth = document.getElementById('canvas_container').offsetWidth;
      setCanvasWidthSize(Math.trunc(CanvasContainerOffsetWidth));
    })

  }, [CanvasWidthSize]);


  const StartDraw = (e) => {
    if (!IsMousePressed) {

      if (CanvasIcon === 'Brush') {

        CanvasContext.strokeStyle = BrushColor;
        CanvasContext.lineWidth = 5;
        CanvasContext.lineCap = "round";
        CanvasContext.beginPath();
        CanvasContext.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

      } else { CanvasContext.clearRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 32, 32) }
      setIsMousePressed(true);
    }
  }

  const MovingDraw = (e) => {

    if (IsMousePressed) {
      if (CanvasIcon === 'Brush') {
        CanvasContext.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        CanvasContext.stroke();
      } else { CanvasContext.clearRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 32, 32) }
    }
  }



  const OutDrawOrOutCanvas = () => {
    if (IsMousePressed) {
      if (CanvasIcon === 'Brush') {
        CanvasContext.closePath();

      }
      setIsMousePressed(false);
    }
  }


  const ChangeColor = (e) => {
    let _e = e.target.nodeName.toLowerCase();
    if (_e === "i") {
      SetBrushColor(`${getComputedStyle(e.target.parentElement).backgroundColor}`)
      SetBrushColorName(`${e.target.parentElement.innerText}`)
    } else {
      SetBrushColor(`${getComputedStyle(e.target).backgroundColor}`)
      SetBrushColorName(`${e.target.innerText}`)
    }

    CanvasIconBrush()
  }

  const cleanAll = () => {
    let canvas = document.querySelector('canvas');
    CanvasContext.clearRect(0, 0, canvas.width, canvas.height);
  }


  const CanvasIconBrush = () => setCanvasIcon('Brush');
  const CanvasIconEraser = () => setCanvasIcon('Eraser');

  const ActiveModal = () => {
    setVisibleModal(['block','MyModal active']);
  }
  const HideModal = () => {
    setVisibleModal(['block','MyModal hide']);
  }
  

  return (

    <>
      {/* MENSAJE DE ALERTA */}
      <div id="announcement">
        <h1>La aplicacion no esta desarrollada a este punto :)</h1>

      </div>

      <Header />

      {/* CONTENDOR FLEX. */}
      <main>

        <Canvas
          CanvasWidthSize={CanvasWidthSize}
          StartDraw={StartDraw}
          MovingDraw={MovingDraw}
          OutDrawOrOutCanvas={OutDrawOrOutCanvas}
          CanvasIcon={CanvasIcon}
        />

        <Menu>

          {/* <GuiaRapida /> */}
          <Opciones
            ChangeColor={ChangeColor}
            BrushColor={BrushColor}
            BrushColorName={BrushColorName}
            CanvasIconEraser={CanvasIconEraser}
            cleanAll={cleanAll}
            DisplayModal={ActiveModal}
          />

        </Menu>

      </main>

      <section className={`${VisibleModal[1]}`} style={{display:`${VisibleModal[0]}`}} >
        <section className="MyModal-body">
          <div className="header-flex">
            <p>HOLAHOLA HOLAHOAL</p>
            <button onClick={HideModal}>X</button>
          </div>
          <div className="section-flex">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
        </section>
      </section>

    </>


  )
}
export default App;