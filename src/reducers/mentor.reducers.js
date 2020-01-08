import { LIST_MENTOR_SUCCESS, LIST_MENTOR_FAILURE } from '../actions/mentor.actions';

const initialState = {
  mentors: [],
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
    default:
      return state
  }
}

export default mentor;