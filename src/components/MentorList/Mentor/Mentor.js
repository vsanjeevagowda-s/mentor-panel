import React from 'react'
import {
  Row,
  Col
} from 'reactstrap';

const editMentor = () => {

}

const Mentor = ({ mentor, index, deleteMentor }) => {
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
          <span onClick={() => editMentor()}>edit</span>
          <span onClick={ () => deleteMentor(_id) }>delete</span>
        </div>
      </Col>
    </Row>
  )
}
export default Mentor;