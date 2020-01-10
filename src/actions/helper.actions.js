export const PERSIST_SOCKET_INSTANCE = 'PERSIST_SOCKET_INSTANCE';

export const headers = () => {
  return {
    headers : { 'Content-Type': 'application/json', Authorization: localStorage.getItem('token') }
  }
}