import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div>
        Main
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return state;
}

export default connect(mapStateToProps, {})(Main);