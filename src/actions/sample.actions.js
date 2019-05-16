export const LIST_MOVIE_SUCCESS = 'LIST_MOVIE_SUCCESS';
export const LIST_MOVIE_FAILURE = 'LIST_MOVIE_FAILURE';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const listMovies = () => (dispatch) => {
  return fetch(`${ROOT_URL}/upcommingMovies`)
    .then(resp => resp.json())
    .then(resp => {
      return Promise.resolve(dispatch(listMoviesSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(listMoviesFailure(error)));
    })
}

const listMoviesSuccess = (resp) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    resp,
  }
}

const listMoviesFailure = (error) => {
  return {
    type: LIST_MOVIE_FAILURE,
    error,
  }
};
