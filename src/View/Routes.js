import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Home/';
import About from './About/';
import Navigation from "./../Component/Navigation/";

class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>My App</h1>

          <Navigation />
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
