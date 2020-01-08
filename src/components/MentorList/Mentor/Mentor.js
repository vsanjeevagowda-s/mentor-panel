import React from 'react'
import {
  Row,
  Col
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';

const editMentor = () => {

}

const Mentor = ({ mentor, index, deleteMentor, history }) => {
  const { full_name, email, mobile, about, _id } = mentor;
  return (
    <Row className='py-2'>
      <Col>
        <div>
          <span>{index + 1}</span>
          <span> {full_name}</span>
          <span>{email}</span>
          <span>{mobile}</span>
          <span>{about}</span>
          <span className='cursor-pointer'><Link to={{
            pathname: `/mentor/${_id}`, state: {
              type: 'update',
              formTitle: 'Update'
            }
          }} ><i className="fa fa-pencil"></i></Link></span>
          <span className='cursor-pointer' ><i className="fa fa-trash cursor-pointer"></i></span>
        </div>
      </Col>
    </Row>
  )
}
export default Mentor;