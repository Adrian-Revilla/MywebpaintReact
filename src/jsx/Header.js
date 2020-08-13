import React from 'react'
const Header = (props) => {
  return (
    <header>
      <h1 ondragstart="return false;" ondrop="return false;">
        ¡DIBUJA CON TU MOUSE!
        <i class='fas fa-mouse-pointer' style={{fontSize:'48px',color:'white'}}>
        </i>
      </h1>
    </header>

  )
}
export default Header;