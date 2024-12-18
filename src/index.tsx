import React from 'react';
import ReactDOM from 'react-dom/client'; // Menggunakan ReactDOM.createRoot untuk React 18+
import App from './App';
import './index.css'; // Mengimpor file CSS untuk aplikasi

// Menggunakan React 18 dengan createRoot
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
