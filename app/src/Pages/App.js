import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './Home';
import Test from "./Test";


/*
    Name: App
    Description: The container for all of the other pages.
    Inserts different page into the Routes depending on
    the link

 */
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Route exact path = "/" component = {Home}/>
                  <Route path="/webmux" component={Test}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
