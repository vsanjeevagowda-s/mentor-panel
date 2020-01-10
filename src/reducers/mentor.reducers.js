import { 
  LIST_MENTOR_SUCCESS, 
  LIST_MENTOR_FAILURE,
  GET_MENTOR_SUCCESS,
  GET_MENTOR_FAILURE,
  RESET_MENTOR_LIST,
  DELETE_MENTOR_SUCCESS } from '../actions/mentor.actions';

const initialState = {
  mentors: [],
  mentor: {},
  nextpageAvailable: false,
  pageNumber:1
}

const deleteMentorSuccess = (state, action) => {
  const newMentorsArr = JSON.parse(JSON.stringify(state.mentors));
  const newArr = newMentorsArr.filter(item => {
    if(item._id !== action.resp.id){
      return item
    }
  })
  return {
    ...state,
    mentors: newArr
  }
};

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
    case RESET_MENTOR_LIST:
      return {
        ...state,
        ...initialState,
      }
    case DELETE_MENTOR_SUCCESS:
      return deleteMentorSuccess(state, action)
    default:
      return state
  }
}

export default mentor;