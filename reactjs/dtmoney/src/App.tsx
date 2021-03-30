import {GlobalStyle} from "./styles/global";

import {Header} from "./component/Header";
import {Dashboard} from "./component/Dashboard";

export function App() {
    return (
        <>
            <Header/>
            <Dashboard/>
            <GlobalStyle/>
        </>
    );
}

export default App;
