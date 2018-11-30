const initialState = {
  auth: { authenticated: localStorage.getItem('token')},
  authError: '',
  authSuccess: ''
};

export default initialState;
