import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <React.StrictMode>
    <>
      <div>
        <h1>hello</h1>
      </div>
    </>

  </React.StrictMode>


);