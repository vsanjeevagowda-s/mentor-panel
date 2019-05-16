import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div className='bg-secondary text-light'>
        Main
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return state;
}

export default connect(mapStateToProps, {})(Main);