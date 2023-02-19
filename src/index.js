import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './Components/Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-osoluiemsmr8uoqc.us.auth0.com"
    clientId="UGYnvAka7jzeKdWMljTwouk0SP8H4wen"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Context>
      <App />
    </Context>
  </Auth0Provider>,
);
