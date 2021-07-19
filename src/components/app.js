import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Icons from "./icons";
import NoMatch from './noMatch';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Members from './members';
import Contact from './contact';
import Login from './login';


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}