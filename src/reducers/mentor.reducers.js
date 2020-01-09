import { 
  LIST_MENTOR_SUCCESS, 
  LIST_MENTOR_FAILURE,
  GET_MENTOR_SUCCESS,
  GET_MENTOR_FAILURE } from '../actions/mentor.actions';

const initialState = {
  mentors: [],
  mentor: {},
  nextpageAvailable: false,
  pageNumber:1
}

const mentor = (state = initialState, action) => {
  switch (action.type) {
    case LIST_MENTOR_SUCCESS:
      const newMentorsArr = JSON.parse(JSON.stringify(state.mentors))
        return {
          ...state,
          mentors: newMentorsArr.concat(action.resp.mentors),
          nextpageAvailable: ((action.resp.pages - action.resp.page) <= 0) ? false : true,
          pageNumber: action.resp.page
        }
    case LIST_MENTOR_FAILURE:
      return {
        ...state,
        nextpageAvailable: false
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