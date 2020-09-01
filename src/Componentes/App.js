import React, { useState, useEffect } from 'react';
import Header from './Header'
import Canvas from './Canvas'
import Opciones from './Opciones';
import Menu from './Menu';
import Modal from './Modal'


const App = () => {

  //CONTEXTO DE CANVAS API
  let [CanvasContext, setCanvasContext] = useState('');

  // SIZE DEL CANVAS
  let [CanvasWidthSize, setCanvasWidthSize] = useState('');

  //ICONO ACTUAL DEL <canvas></canvas>
  let [CanvasIcon, setCanvasIcon] = useState('Brush');

  //DETECTAR CUANDO EL MOUSE ESTA PRESIONADO
  let [IsMousePressed, setIsMousePressed] = useState(false);

  // COLOR DEL PINCEL O BRUSH, 
  let [BrushColor, SetBrushColor] = useState('rgb(52, 52, 151)');

  //EL NOMBRE DEL COLOR ACTUAL EN EL TITULO DE OPCIONES
  let [BrushColorName, SetBrushColorName] = useState(' Azul');

  //Estado inicial del modal de ayuda
  let [VisibleModal, setVisibleModal] = useState('none');

  //Estado de la animacion del modulo React Animate
  let [Animation, setAnimation] = useState(false);

  //Propiedad booleana para el boton de ayuda
  let [Disabled, setDisabled] = useState(false);

  // CONTEXTO DE LA API CANVAS AL CARGAR LA APP
  useEffect(() => setCanvasContext(document.querySelector('canvas').getContext('2d')), [CanvasContext])


  // AJUSTAR EL TAMAÑO DEL <canvas></canvas>
  // math.trunc quita los decimales del offset width (solo es una medida para evitar errores)
  // ESTOS VALORES SE COLOCAN LUEGO EN EL ATRIBUTO  "Width" del  canvas
  useEffect(() => {
    let CanvasContainerOffsetWidth;

    //la primera vez que se renderiza, se establece el offset height del navegador.
    if (CanvasWidthSize === '') {
      CanvasContainerOffsetWidth = document.getElementById('canvas_container').offsetWidth;
      setCanvasWidthSize(Math.trunc(CanvasContainerOffsetWidth));
    }

    //SI SE HACE RESIZE A LA VENTANA, SE ACTUALIZA EL WIDTH DEL CANVAS
    window.addEventListener('resize', () => {
      CanvasContainerOffsetWidth = document.getElementById('canvas_container').offsetWidth;
      setCanvasWidthSize(Math.trunc(CanvasContainerOffsetWidth));
    })

  }, [CanvasWidthSize]);

  //MANEJAR LA TECLA ESCAPE SI ESTE SE PULSA CUANDO EL MODAL ESTA ACTIVO
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && VisibleModal === 'block') {

        //remueve la animacion
        setAnimation(false);

        //habilita el boton de ayuda
        setDisabled(false);

        //pasado un tiempo hace del modal un display none, para que este no interrumpa al canvas.
        setTimeout(() => setVisibleModal('none'), 400);
      }

    })
  })

  //cuando se hace click en el canvas.
  const StartDraw = (e) => {
    if (!IsMousePressed) {
      // si el icono actual es de un 'Brush' empieza prepara el dibujado
      if (CanvasIcon === 'Brush') {

        CanvasContext.strokeStyle = BrushColor;
        CanvasContext.lineWidth = 5;
        CanvasContext.lineCap = "round";
        CanvasContext.beginPath();
        CanvasContext.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

        // si no es 'Brush' entonces borra en un area de 32 pixeles (un cuadrado)
      } else { CanvasContext.clearRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 32, 32) }

      //cambia  el estado
      setIsMousePressed(true);
    }
  }

  //dibuja en el canvas SOLO si ya se ha hecho click ( si se ha disparado StartDraw) 
  //  y se esta moviendo el mouse con el boton presionado
  const MovingDraw = (e) => {

    if (IsMousePressed) {
      if (CanvasIcon === 'Brush') {
        CanvasContext.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        CanvasContext.stroke();
        // borra en un area de 32 pixeles a medida que se mueve
      } else { CanvasContext.clearRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 32, 32) }
    }
  }


  //SI EL PUNTERO SE SALE DEL AREA DEL CANVAS O ESTE DEJA DE PRESIONAR EL BOTON IZQUIERDO:
  const OutDrawOrOutCanvas = () => {
    if (IsMousePressed) {
      if (CanvasIcon === 'Brush') {
        CanvasContext.closePath();
      }
      setIsMousePressed(false);
    }
  }

  // cambian el color del pincel con el backgroundColor del boton del cual se esta presionando con SetBrushColor
  // y ademas cambian el nombre del titulo del MENU con setBrushColorName
  const ChangeColor = (e) => {
    // se identifica que se clickeó
    let _e = e.target.nodeName.toLowerCase();

    //si fue el icono navega el DOM y establece el color
    if (_e === "i") {
      SetBrushColor(`${getComputedStyle(e.target.parentElement).backgroundColor}`)
      SetBrushColorName(`${e.target.parentElement.innerText}`)
      //si solo fue el boton entonces solo toma el color del background directamente
    } else {
      SetBrushColor(`${getComputedStyle(e.target).backgroundColor}`)
      SetBrushColorName(`${e.target.innerText}`)
    }

    CanvasIconBrush()
  }

  //LIMPIA TODA LA ETIQUETA CANVAS
  const cleanAll = () => {
    let canvas = document.querySelector('canvas');
    CanvasContext.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Cambian los iconos del canvas (diseño del cursor)
  const CanvasIconBrush = () => setCanvasIcon('Brush');
  const CanvasIconEraser = () => setCanvasIcon('Eraser');

  //MANEJA EL DESPLIEGUE DEL MODAL DE AYUDA
  const ToggleModal = () => {


    if (VisibleModal === 'none') {
      
      setVisibleModal('block')
      setAnimation(true);
      setDisabled(true);

      // vuelve a ajustar el focos en el navegador que perdió debido al setDisabled
      document.documentElement.focus();

    } else {
      setAnimation(false);
      setDisabled(false);
      setTimeout(() => setVisibleModal('none'), 400);
    }

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
      
      <Modal VisibleModal={VisibleModal} Animation={Animation} ToggleModal={ToggleModal} />
      
    </>


  )
}
export default App;