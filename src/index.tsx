import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {StateProvider} from "./store/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StateProvider>
            <App/>
        </StateProvider>
    </React.StrictMode>
);
