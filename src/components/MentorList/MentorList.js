import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Link
} from 'react-router-dom';
import * as mentorActions from '../../actions/mentor.actions';
import {
  Row,
  Col
} from 'reactstrap';
import Mentor from './Mentor';

class MentorList extends Component {
  constructor(props) {
    super(props);
    this.deleteMentor = this.deleteMentor.bind(this);
  }

  componentDidMount() {
    const { listMentor } = this.props;
    listMentor();
  }

  deleteMentor(id) {
    const { deleteMentor, listMentor } = this.props;
    deleteMentor(id)
    .then(() => {
      listMentor();
    })
  }

  addMentorButton() {
    return (
      <Col className='main-test-list-title text-right '><Link to={{
        pathname: `/mentor/create`, state: {
          type: 'new',
          formTitle: 'New'
        }
      }} ><i className="fa fa-plus-circle fa-2x cursor-pointer"></i></Link></Col>
    )
  }

  render() {
    const { mentors } = this.props;
    return (
      <Row className='border shadow rounded'>
        <Col>
          <Row className='py-2 bg-light border-bottom'>
            <Col className='main-test-list-title'>Mentors</Col>
            {this.addMentorButton()}
          </Row>
          {
            mentors && mentors.length > 0 && mentors.map((mentor, index) => {
              return <Mentor  deleteMentor={this.deleteMentor} key={mentor._id ? mentor._id : index} mentor={mentor} index={index} />
            })
          }
          {mentors && mentors.length === 0 && <div className='text-center'>No Mentors</div>}
        </Col>
      </Row>
    )
  }

}


const mapStateToProps = state => {
  const { mentors } = state.mentor;
  return { mentors };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...mentorActions }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MentorList));