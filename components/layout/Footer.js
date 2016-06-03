import React from 'react';

class Footer extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <footer className="mdl-mini-footer" ref="root">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">&copy; 2016 NFL</div>
          <div className="mdl-layout-spacer"></div>
        </div>
      </footer>
    );
  }

}

export default Footer;
