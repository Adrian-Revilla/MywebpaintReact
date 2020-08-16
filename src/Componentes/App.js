import React, { useState, useEffect } from 'react';
import Header from './Header'
import Canvas from './canvas'
// import GuiaRapida from './GuiaRapida';
import Opciones from './Opciones';
import Menu from './Menu';
// puedo importar asi url('${logo}')
// o  asi  import logo from '../assets/images/logo.svg';

const App = () => {


  let [size, setSize] = useState('');
  let [canvasContext, setCanvasContext] = useState('');

  let [posX, setPosX] = useState(0);
  let [posY, setPosY] = useState(0);
  let [isMouseDown, setisMouseDown] = useState(false);
  let [Brush, SetBrush] = useState('rgb(52, 52, 151)');
  let [ColorName, setColorName] = useState('Azul');

  useEffect(() => setCanvasContext(document.querySelector('canvas').getContext('2d')), [canvasContext])

  useEffect(() => {
    if (size === '') {
      setSize(Math.trunc(document.getElementById('canvas_container').offsetWidth));
    }
    window.addEventListener('resize', () => {
      console.log('en resize')
      setSize(Math.trunc(document.getElementById('canvas_container').offsetWidth));
    })

  }, [size]);


  const Draw = (e) => {
    if (!isMouseDown) {

      canvasContext.strokeStyle = Brush;
      canvasContext.lineWidth = 5;
      canvasContext.lineCap = "round";
      canvasContext.beginPath();
      canvasContext.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setisMouseDown(true);

    }
  }

  const MovingDraw = (e) => {

    if (isMouseDown) {
      canvasContext.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      canvasContext.stroke();
    }
  }
  const outDraw = () => {

    if (isMouseDown) {
      canvasContext.closePath();
      setisMouseDown(false);
    }

  }
  const outCanvas = () => {
    if (isMouseDown) {
      canvasContext.closePath();
      setisMouseDown(false);
    }
  }

  const ChangeColor = (e) => {
    let _e = e.target.nodeName.toLowerCase();
    if (_e === "i") {
      SetBrush(`${getComputedStyle(e.target.parentElement).backgroundColor}`)
      setColorName(`${e.target.parentElement.innerText}`)
    } else {
      SetBrush(`${getComputedStyle(e.target).backgroundColor}`)
      setColorName(`${e.target.innerText}`)
    }
  
  }


  return (

    <>
      <h1 id="announcement">LA APLICACION NO ESTA DESARROLLADA A ESTE PUNTO</h1>
      <Header />
      <main>

        <Canvas canvasWidth={size} posX={posX} posY={posY} Draw={Draw} MovingDraw={MovingDraw}
          outDraw={outDraw} outCanvas={outCanvas}

        />

        <Menu>

          {/* <GuiaRapida /> */}
          <Opciones ChangeColor={ChangeColor} Brush={Brush} ColorName={ColorName} />

        </Menu>

      </main>


    </>


  )
}
export default App;
