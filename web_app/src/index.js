import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css';
import { MoneyTrackerContextProvider } from './context/MoneyTrackerContext';
import { appTheme } from './styles';

ReactDOM.render(
    <MoneyTrackerContextProvider>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </MoneyTrackerContextProvider>,
    document.getElementById('root'),
);