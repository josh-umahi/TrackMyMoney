import React from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css';
import { MoneyTrackerContextProvider } from './context/MoneyTrackerContext';
import { appTheme } from './styles';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
            <MoneyTrackerContextProvider>
                <ThemeProvider theme={appTheme}>
                    <App />
                </ThemeProvider>
            </MoneyTrackerContextProvider>
        </AuthContextProvider>,
    </QueryClientProvider>
);