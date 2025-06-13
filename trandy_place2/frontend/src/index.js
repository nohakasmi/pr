import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './hooks/useAuth'; // ajoute cette ligne !

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> {/* ajoute ce wrapper ici */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
