import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css';
import { MoneyTrackerContextProvider } from './context/MoneyTrackerContext';
import { appTheme } from './styles';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
    <AuthContextProvider>
        <MoneyTrackerContextProvider>
            <ThemeProvider theme={appTheme}>
                <App />
            </ThemeProvider>
        </MoneyTrackerContextProvider>
    </AuthContextProvider>,
    document.getElementById('root'),
);