/* Connect the Application to the DOM */

import React from 'react';
import ReactDOM from 'react-dom/client';

// BrowserRouter allows us to use our routes.
import { BrowserRouter } from 'react-router-dom';

/*Import DOM from App.js*/
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>    
);