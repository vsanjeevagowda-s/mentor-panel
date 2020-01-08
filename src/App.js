import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './components/Main';
import './App.css';
import {
  Container,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Main />
      </Container>
    );
  }
}

export default App;
