import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css';
import { Provider } from './context/context';
import { appTheme } from './styles';

ReactDOM.render(
    <Provider>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);