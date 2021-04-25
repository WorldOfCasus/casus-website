import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Switch from "react-bootstrap/Switch";
import SplashPage from "./pages/SplashPage";
import ApplicationPage from "./pages/ApplicationPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App h-100">
      <Router>
        <div className="h-100">
          <Switch className="h-100 pl-0 pr-0">
            <Route path="/apply" exact component={ApplicationPage} />
            <Route path="/main" exact component={MainPage} />
            <Route path="/" exact component={SplashPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
