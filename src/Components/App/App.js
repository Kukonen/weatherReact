import React from 'react'
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Start from "../Start/Start";
import England from "../England/England";
import USA from "../USA/USA";
import Ukraine from "../Ukraine/Ukraine";
import Russia from "../Russia/Russia";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Start} />
                <Route path="/England" component={England} />
                <Route path="/USA" component={USA} />
                <Route path="/Russia" component={Russia} />
                <Route path="/Ukraine" component={Ukraine} />
            </BrowserRouter>
        </div>
    )
}

export default App;