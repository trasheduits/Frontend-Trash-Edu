import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_APP_URL;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// import { ColorModeScript } from '@chakra-ui/react';
// import React, { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import App from './App';
// import Router from './Router';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
// import { ChakraProvider } from '@chakra-ui/react';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(
//   <StrictMode>
//     <ColorModeScript />
//     <ChakraProvider>
//       <Router />
//     </ChakraProvider>
//   </StrictMode>
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
