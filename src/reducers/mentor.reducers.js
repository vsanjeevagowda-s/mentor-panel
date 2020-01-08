import { 
  LIST_MENTOR_SUCCESS, 
  LIST_MENTOR_FAILURE,
  GET_MENTOR_SUCCESS,
  GET_MENTOR_FAILURE } from '../actions/mentor.actions';

const initialState = {
  mentors: [],
  mentor: {}
}

const mentor = (state = initialState, action) => {
  switch (action.type) {
    case LIST_MENTOR_SUCCESS:
      return {
        ...state,
        mentors: action.resp.mentors
      }
    case LIST_MENTOR_FAILURE:
      return {
        ...state,
        mentors: []
      }
    case GET_MENTOR_SUCCESS:
      return {
        ...state,
        mentor: action.resp.mentor
      }
    case GET_MENTOR_FAILURE:
      return {
        ...state,
        mentor: {}
      }
    default:
      return state
  }
}

export default mentor;