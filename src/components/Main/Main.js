import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import SignedinLayout from '../SignedinLayout';
import Signin from '../Signin';

class Main extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const { token } = this.props;
    const { token: ntoken } = nextProps;

    if (token !== ntoken) return true;
    return false;
  }

  render() {
    const { token } = this.props;

    return (
      <Switch>
        {!token && <Route exact path="/" component={Signin} />}
        {token && <SignedinLayout />}
        <Route component={Signin} />
      </Switch>
    );
  }
}

export default Main;