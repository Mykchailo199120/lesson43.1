import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {CounterProvider} from "./context/CounterContext";
import App from './App'
import './styles/main.scss'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </StrictMode>
);