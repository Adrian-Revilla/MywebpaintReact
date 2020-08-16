import React from 'react'
const Header = (props) => {
  return (
    <header className="header">
      <h1 id="title">
         <i className='fas fa-mouse-pointer' style={{ fontSize: '40px' }}></i>
        &nbsp; ¡Dibuja con tu mouse!
      </h1>
      <span id="author">@Adrian-Revilla ⇨ </span> &nbsp;
     <a id="github" href="https://github.com" ><i className="fab fa-github"  style={{fontSize:'40px'}}></i></a> 
    </header>

  )
}
export default Header;