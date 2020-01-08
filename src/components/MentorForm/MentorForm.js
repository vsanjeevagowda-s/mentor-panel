import React, { Component } from 'react'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as mentorActions from '../../actions/mentor.actions';

class MentorForm extends Component {
  constructor(props){
    super(props);
    console.log('props=>', props.location.state);
    this.state = {
      fullName: '',
      email: '',
      mobile: '',
      about: ''
    }
  }

  componentDidMount(){
    const { getMentor, match: { params : { id } } } = this.props;
    const { type } = this.props.location.state;
    if(type === 'update'){
      getMentor(id)
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps);
    const {full_name:fullName, email, mobile, about  } =  nextProps.mentor;
    this.setState({
      fullName, email, mobile, about 
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submit(){
    const { type } = this.props.location.state;
    const { createMentor, updateMentor, history }  = this.props;
    const { match: { params : { id } } } = this.props;
    if(type === 'new'){
      createMentor({ ...this.state })
      .then(() => {
        return history.push('/');
      })
    }
    if(type === 'update'){
      updateMentor({ ...this.state }, id)
      .then(() => {
        return history.push('/');
      })
    }
  }

  render() {
    const { formTitle } = this.props.location.state;
    console.log('this.state =>', this.state)
    const { fullName, email, mobile, about } = this.state;
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }} className='border shadow rounded'>
          <div className='my-4'>
            <div className='text-center h4 py-2 border-bottom'>{formTitle} Mentor</div>
            <Form>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input value={fullName} type="text" name="fullName" placeholder="Enter the name" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
              <Label for="email">Email</Label>
                <Input value={email} type="email" name="email" placeholder="Enter the email" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
              <Label for="Title">Mobile No.</Label>
                <Input value={mobile} type="number" name="mobile" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="about">About</Label>
                <Input value={about} type="textarea" name="about" placeholder="About mentor..." onChange={e => this.handleChange(e)} />
              </FormGroup>
            </Form>
             <Button color="secondary" size="sm" block className='py-2' onClick={() => this.submit()}>SUBMIT</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  const { mentor } = state.mentor
  return { mentor };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...mentorActions }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MentorForm));
