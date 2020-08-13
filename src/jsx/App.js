import React from 'react';
import Header from './Header'
import Canvas from './canvas'
import GuiaRapida from './GuiaRapida';
import Opciones from './Opciones';
import Menu from './Menu';

// puedo importar asi url('${logo}')
// o  asi  import logo from '../assets/images/logo.svg';

const App = () => {

  return (
    <>
      <Header />      
      <main>

        <Canvas />

        <Menu>

          <GuiaRapida />

          <Opciones />

        </Menu>

      </main>

    </>


  )
}
export default App;
