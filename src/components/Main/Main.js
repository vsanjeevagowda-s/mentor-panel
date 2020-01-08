import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import Dashboard from '../Dashboard';
import MentorForm from '../MentorForm';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/mentor/create" component={MentorForm} />
        <Route exact path="/mentor/:id" component={MentorForm} />
      </Switch>
    );
  }
}

// const mapStateToProps = state =>{
//   return state;
// }

// export default connect(mapStateToProps, {})(Main);

export default Main;