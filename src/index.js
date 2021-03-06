import React from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css';
import { MoneyTrackerContextProvider } from './context/MoneyTrackerContext';
import { appTheme } from './styles';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MoneyTrackerContextProvider>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </MoneyTrackerContextProvider>
);