import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Dashboard from '../Dashboard';
import Interceptor from '../Interceptor';
import MentorForm from '../MentorForm';


class SignedinLayout extends Component {


  render() {
    return (
      <React.Fragment>
        <Interceptor />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/mentor/create" component={MentorForm} />
          <Route exact path="/mentor/:id" component={MentorForm} />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const actions = {}

export default withRouter(connect(mapStateToProps, actions)(SignedinLayout));