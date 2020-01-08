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
  Col,
  Table
} from 'reactstrap';
import Mentor from './Mentor';

class MentorList extends Component {
  constructor(props) {
    super(props);
    this.deleteMentor = this.deleteMentor.bind(this);
    this.page = 1;
  }

  componentDidMount() {
    const { listMentor } = this.props;
    listMentor(this.page);
  }

  deleteMentor(id) {
    const { deleteMentor, listMentor } = this.props;
    deleteMentor(id)
      .then(() => {
        listMentor(this.page);
      })
  }

  nextPage(page) {
    const { listMentor } = this.props;
    listMentor(page);
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
    const { mentors, history, nextpageAvailable } = this.props;
    return (
      <Row className='border shadow rounded'>
        <Col>
          <Row className='py-2 bg-light border-bottom'>
            <Col className='main-test-list-title'>Mentors</Col>
            {this.addMentorButton()}
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>About</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    mentors && mentors.length > 0 && mentors.map((mentor, index) => {
                      return <Mentor history={history} deleteMentor={this.deleteMentor} key={mentor._id ? mentor._id : index} mentor={mentor} index={index} />
                    })
                  }
                  <tr>
                    <td colspan="6">
                      {nextpageAvailable && <div className='text-center cursor-pointer' onClick={() => this.nextPage(this.page += 1)}>Load More...</div>}
                      {mentors && mentors.length === 0 && <div className='text-center'>No Mentors</div>}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}


const mapStateToProps = state => {
  const { mentors, nextpageAvailable, page } = state.mentor;
  return { mentors, nextpageAvailable, page };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...mentorActions }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MentorList));