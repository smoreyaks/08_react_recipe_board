import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



// Styles
import './index.css';

// Component
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
