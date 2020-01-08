import React from 'react'
import {
  Row,
  Col,
  Table
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';


const Mentor = ({ mentor, index, deleteMentor, history }) => {
  const { full_name, email, mobile, about, _id } = mentor;
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{full_name}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{about}</td>
      <td>
        <span className='cursor-pointer'><Link to={{
          pathname: `/mentor/${_id}`, state: {
            type: 'update',
            formTitle: 'Update'
          }
        }} ><i className="fa fa-pencil"></i></Link></span>
        <span className='cursor-pointer' onClick={() => deleteMentor(_id)} ><i className="fa fa-trash cursor-pointer"></i></span>
      </td>
    </tr>
  )
}
export default Mentor;