import React from 'react';
import logo from '../assets/images/logo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage:`url('${logo}')`,backgroundRepeat:'no-repeat',backgroundPosition:'center center'  }}>
        <mark>
          no giro
        </mark>
      </header>
    </div>
  );
}

export default App;
