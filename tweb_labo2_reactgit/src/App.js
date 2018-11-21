import React, { Component } from 'react';

import './App.css';

import IssuesPages from './pages/IssuesPages';
import IssueDetailPage from './pages/IssueDetailPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <div className="App">
        

        <Router>

                <Switch>
                  <Route default path="/" exact component={IssuesPages} />
                  <Route
                  path="/issues" 
                  component={IssueDetailPage}
                  />
                </Switch>


          </Router>
      </div>
    );
  }
}

export default App;
