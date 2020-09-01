import React, { useState, useEffect } from 'react';
import Header from './Header'
import Canvas from './canvas'
import Opciones from './Opciones';
import Menu from './Menu';
import { Animated } from 'react-animated-css'
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

  let [VisibleModal, setVisibleModal] = useState('none');

  let [Animation, setAnimation] = useState(false);


  let [Disabled, setDisabled] = useState(false);

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

  /* 
  setAnimation(false);
        setDisabled(false);
        setTimeout(() => setVisibleModal('none') ,400);
  */
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && VisibleModal === 'block') {
        console.log('KEY PRESS')
        setAnimation(false);
        setDisabled(false);
        setTimeout(() => setVisibleModal('none'), 400);
      }

    })
  })

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

  const ToggleModal = () => {
    // if (VisibleModal === 'none') {
    //   setVisibleModal('block');
    // setDisabled(true)
    // setAnimation(true)
    // } 
    if (VisibleModal === 'none') {
      setVisibleModal('block')
      setAnimation(true);
      setDisabled(true);
      document.documentElement.focus();
    } else {
      setAnimation(false);
      setDisabled(false);
      setTimeout(() => setVisibleModal('none'), 400);
    }

  }
  // const hide = () => setVisibleModal(VisibleModal + ' animation-reverse');

  /* 
    let [VisibleModal, setVisibleModal] = useState('block');
    
    let [Animation, setAnimation] = useState(false);
  */





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
            ToggleModal={ToggleModal}
            Disabled={Disabled}
          />

        </Menu>

      </main>

      <div className="temporal" style={{ display: `${VisibleModal}` }}>
        <Animated animationIn="fadeInUp" animationOut="zoomOut" isVisible={Animation} animateOnMount={false} >
          <section className={`MyModal`}   >
            <section className="MyModal-body">
              <div className="header-flex">
                <h2>Modal Title</h2>
                <button id="header_exit" onClick={ToggleModal}>Cerrar <i class="fas fa-external-link-alt"></i></button>
              </div>
              <div className="section-flex">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>
              <button id="exit">OK</button>
            </section>
          </section>
        </Animated>


      </div>


    </>


  )
}
export default App;