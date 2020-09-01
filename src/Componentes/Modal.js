import React from 'react';
import { Animated } from 'react-animated-css'
const Modal = (props) => {
  return (
    <div className="Absolute" style={{ display: `${props.VisibleModal}` }}>
      <Animated animationIn="fadeInUp" animationOut="zoomOut" isVisible={props.Animation} animateOnMount={false} >
        <section className="MyModal">
          <section className="MyModal-body">
            <div className="header-flex">
              <h2>Modal Title</h2>
               <i id="header_exit" tabIndex="0" className="fas fa-external-link-alt" onClick={props.ToggleModal} ></i>
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
  );
}

export default Modal;