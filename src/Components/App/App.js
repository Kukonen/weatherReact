import React from 'react'
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter />
        </div>
    )
}

export default App;