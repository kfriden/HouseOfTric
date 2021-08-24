import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Icons from "./icons";
import NoMatch from './noMatch';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Members from './members';
import Blog from './blog';
import BlogDetail from './blogDetail';
import Contact from './contact';
import Login from './login';
import Footer from './footer';


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className='app'>
        <Router>
            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:slug" component={BlogDetail} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>

            <Footer />
        </Router>
      </div>
    );
  }
}
