import React from 'react';
import ReactDOM from 'react-dom';
import './customizations.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="dev-interactions-work.eu.auth0.com"
        clientId="eJ6NKWwFMrjsY9EDzEeawzLUEsGuahdQ"
        redirectUri={window.location.origin}
        audience="https://localhost:5001/api"
        scope="read:user write:user admin:admin"
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
