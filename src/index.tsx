import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {StateProvider} from "./store/state";
import {render} from "react-dom";

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// );

const MyApp: React.FunctionComponent = () => {
    return <React.Fragment>
        <StateProvider>
            <App/>
        </StateProvider>
    </React.Fragment>
}

render(<MyApp/>, document.getElementById('root'))
