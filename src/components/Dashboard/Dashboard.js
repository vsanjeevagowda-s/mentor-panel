import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mentorActions from '../../actions/mentor.actions';
import MentorList from '../MentorList';


function Dashboard() {
  return (
    <MentorList />
    // <div>s</div>
  )
}


export default Dashboard;