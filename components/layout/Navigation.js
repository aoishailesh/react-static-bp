import React from 'react';
import { Link } from 'react-app';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
        // <Link className="mdl-navigation__link" to="/about">About</Link>
        // <Link className="mdl-navigation__link" to="/not-found">Not Found</Link>
    return (
      <nav className="mdl-navigation" ref="root">
        <Link className="mdl-navigation__link" to="/">Home</Link>
      </nav>
    );
  }

}

export default Navigation;
