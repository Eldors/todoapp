import React, {Fragment} from 'react';
import './App.scss';
import {Page} from "./components/Page";

// function App({children}) {
//     return (
//         <Fragment>
//             <Block/>
//         </Fragment>
//         <div className="App">
//             {<Block/>}
//         </div>
//     );
// }

const App: React.FunctionComponent = () => {
    return (
        <Fragment>
            <Page/>
        </Fragment>

    )
}

export default App;
