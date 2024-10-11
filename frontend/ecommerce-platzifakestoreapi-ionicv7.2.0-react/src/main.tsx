import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App'; // Asegúrate de que la ruta es correcta
import { Provider } from 'react-redux';
import { store } from './state/store';
//import './index.css'; // Si tienes un archivo de estilos

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento 'root'");
}
