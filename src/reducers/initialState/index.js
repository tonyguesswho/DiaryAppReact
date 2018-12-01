const initialState = {
  auth: { authenticated: localStorage.getItem('token')},
  authError: '',
  authSuccess: '',
  userProfile:{},
  entries:[]
};

export default initialState;
