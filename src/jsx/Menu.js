import React from 'react';

const Menu = (props) => {
  return (
    <div className="seccion_opciones">
      {props.children}
    </div>
  );
}

export default Menu;