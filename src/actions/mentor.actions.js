import axios from 'axios';
export const LIST_MENTOR_SUCCESS = 'LIST_MENTOR_SUCCESS';
export const LIST_MENTOR_FAILURE = 'LIST_MENTOR_FAILURE';
export const CREATE_MENTOR_SUCCESS = 'CREATE_MENTOR_SUCCESS';
export const CREATE_MENTOR_FAILURE = 'CREATE_MENTOR_FAILURE';
export const DELETE_MENTOR_SUCCESS = 'DELETE_MENTOR_SUCCESS';
export const DELETE_MENTOR_FAILURE = 'DELETE_MENTOR_FAILURE';

const ROOT_URL = process.env.REACT_APP_API_PATH;

export const listMentor = () => (dispatch) => {
  return axios.get(`${ROOT_URL}/mentors`)
    .then(resp => {
      return Promise.resolve(dispatch(listMentorSuccess(resp.data)))
    })
    .catch(error => {
      return Promise.reject(dispatch(listMentorFailure(error)));
    })
}

const listMentorSuccess = (resp) => {
  return {
    type: LIST_MENTOR_SUCCESS,
    resp,
  }
}

const listMentorFailure = (error) => {
  return {
    type: LIST_MENTOR_FAILURE,
    error,
  }
};

export const createMentor = (body) => (dispatch) => {
  return axios.post(`${ROOT_URL}/mentors`, body)
    .then(resp => {
      return Promise.resolve(dispatch(createMentorSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(createMentorFailure(error)));
    })
}

const createMentorSuccess = (resp) => {
  return {
    type: CREATE_MENTOR_SUCCESS,
    resp,
  }
}

const createMentorFailure = (error) => {
  return {
    type: CREATE_MENTOR_FAILURE,
    error,
  }
};

export const deleteMentor = (id) => (dispatch) => {
  debugger
  return axios.delete(`${ROOT_URL}/mentors/${id}`)
    .then(resp => {
      return Promise.resolve(dispatch(deleteMentorSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(deleteMentorFailure(error)));
    })
}

const deleteMentorSuccess = (resp) => {
  return {
    type: DELETE_MENTOR_SUCCESS,
    resp,
  }
}

const deleteMentorFailure = (error) => {
  return {
    type: DELETE_MENTOR_FAILURE,
    error,
  }
};

