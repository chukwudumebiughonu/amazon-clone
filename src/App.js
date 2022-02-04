import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <h1>Hello blonde wife, lets run our precision medicine company 👩🏼🚀</h1>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>I am a checkout, smash the like button</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
