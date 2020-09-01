import React from 'react';
import { Animated } from 'react-animated-css'
const Modal = (props) => {
  return (
    <div className="Absolute" style={{ display: `${props.VisibleModal}` }}>
      <Animated animationIn="fadeInUp" animationOut="zoomOut" isVisible={props.Animation} animateOnMount={false} >
        <section className="MyModal">
          <section className="MyModal-body">
            <div className="header-flex">
              <h3>Información</h3>
               <i id="header_exit" tabIndex="0" className="fas fa-external-link-alt" onClick={props.ToggleModal} ></i>
            </div>
            
            <div className="section-flex">
              <p><i class="fas fa-check"></i>Pulsa con el boton izquierdo de tu mouse y arrastralo por el lienzo para pintarlo </p>
              <p><i class="fas fa-check"></i> Haz click en los botones para cambiar el color del pincel</p>
              <p><i class="fas fa-check"></i> El <q>Borrador</q> borra una area especifica del lienzo  </p>
              <p><i class="fas fa-check"></i> El boton <q>Limpiar</q> hace lo que indica, ¡limpia todo el lienzo!</p>
              
            </div>
            <button id="exit" onClick={props.ToggleModal}><i class="far fa-thumbs-up"></i> ¡Entendido!</button>
          </section>
        </section>
      </Animated>
    </div>
  );
}

export default Modal;