import React from 'react';
import { createBrowserHistory } from 'history';

import { renderRoutes } from 'react-router-config';
import routes from './routes'

import { Router } from 'react-router';

const history = createBrowserHistory();

export default function App() {
    return (
        <Router history={history}>
            {renderRoutes(routes)}
        </Router>
    )
}

