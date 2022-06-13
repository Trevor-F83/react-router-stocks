

import "./App.js"
import Stocks from "./pages/Stocks.js"
import Data from "./pages/Data.js"
import Home from "./pages/Home.js";
import About from "./pages/About.js";

import Nav from "./component/Nav.js"

import { Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav />
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/stocks">
                <Stocks />
            </Route>
            <Route path="/stocks/:symbol"
            render={(routerProps) => <Stocks {...routerProps} />}
            />
        </div>
    );
}

export default App;