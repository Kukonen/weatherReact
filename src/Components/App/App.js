import React from 'react'
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Start from "../Start/Start";
import London from "../London/London";
import Take from "../Take/Take";
import Washington from "../Washington/Washington";
import Moscow from "../Moscow/Moscow";
import Kiev from "../Kiev/Kiev";

const App = () => {
    Take();
    return (

        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Start} />
                <Route path="/London" component={London} />
                <Route path="/Washington" component={Washington} />
                <Route path="/Kiev" component={Kiev} />
                <Route path="/Moscow" component={Moscow} />
            </BrowserRouter>
        </div>
    )
}

export default App;