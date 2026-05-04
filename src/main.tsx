import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} catch (error) {
  console.error('Error rendering the application:', error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<h1>Application failed to load. Check the console for details.</h1>';
  }
}
