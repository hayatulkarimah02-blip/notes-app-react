import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'; // Ngambil App dari folder components
import './styles/style.css'; // Ngambil CSS dari folder styles

const root = createRoot(document.getElementById('root'));
root.render(<App />);