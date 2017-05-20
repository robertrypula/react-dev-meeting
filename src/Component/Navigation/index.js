import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './navigation.css';

const MyLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  />
);

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navigation clearfix">
          <MyLink activeOnlyWhenExact={true} to="/" label="Home" />
          <MyLink to="/about" label="About" />
        </nav>
      </div>
    );
  }
}

export default Navigation;
