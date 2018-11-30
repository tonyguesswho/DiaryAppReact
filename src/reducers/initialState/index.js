const initialState = {
  auth: { authenticated: localStorage.getItem('token')},
  authError: ''
};

export default initialState;
