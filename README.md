# Webpack React
Este repositorio contiene una aplicación que se ejecuta en el frontend y sirve para dibujar en el navegador usando el mouse, hace uso del Canvas API y se desarrollo a través de _react-create-app_, un script que prepara rapidamente un template de un aplicacion de Reactjs

### Estructura del proyecto

```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
└── src
    ├── assets
    │   ├── images
    │   │   ├── borradoralt.ico
    │   │   ├── borradorico.ico
    │   │   ├── borrador.png
    │   │   └── pincel.ico
    │   └── scss
    │       ├── App.scss
    │       ├── Canvas.scss
    │       ├── Header.scss
    │       ├── Main.scss
    │       ├── mediaQueries.scss
    │       ├── MyModal.scss
    │       ├── normalize.scss
    │       └── Opciones.scss
    ├── Componentes
    │   ├── App.js
    │   ├── Canvas.js
    │   ├── Header.js
    │   ├── Menu.js
    │   ├── Modal.js
    │   └── Opciones.js
    └── index.js
```

### Notas sobre el repositorio
* _Se usa React Hooks, (useState y useEffect)_
* src/index.js es el punto de inicio de la app, aqui se importan todos los demas modulos (tanto los estilos como imagenes)
* src/Componentes/App.js es donde reside la raiz del la aplicación de React, se importan los componentes listados en src/Componentes/, aqui están los metodos y estados que necesita la app para funcionar.
* La aplicacion no funciona en dispositivos donde el ancho de la pantalla  sea menor a 768px, 
(**Esto se debe a que, considerando que los dispositivos con un ancho de pantalla menor a 768px manejan 
[Touch Events](https://developer.mozilla.org/es/docs/DOM/Touch_events) 
y que la App maneja eventos de tipo [Mouse](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent), puede que debajo de esa resolución ocurran errores )**


