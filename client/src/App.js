import React from 'react';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";

import Header from './common/Header';
import Home from './Components/Home';
import HTML from './Components/HTML';
import CSS from './Components/CSS3';
import JavaScript from './Components/JavaScript';
import TypeScript from './Components/TypeScript';
import ReactJS from './Components/ReactJS';

import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header/>
        <div className="main">
          <Switch>
              <Route exact path="/"><Home/></Route>
              <Route  path="/HTML"><HTML/></Route>
              <Route path="/CSS"><CSS/></Route>
              <Route path="/JavaScript"><JavaScript/></Route>
              <Route path="/TypeScript"><TypeScript/></Route>
              <Route path="/ReactJS"><ReactJS/></Route>
          </Switch>
        </div>
      </Router>
     
    </div>
    </Provider>
  );
}

export default App;
