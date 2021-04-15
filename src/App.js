import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";

function App(){
    return <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>;
}
// BrowserRouter도 사용할 수 있으나, github pages 설정시 번거로움이 있음 

export default App;