const initialState = {
  auth: { authenticated: localStorage.getItem('token')},
  authError: '',
  authSuccess: '',
  userProfile:{},
  entries:[],
  entryError:''
};

export default initialState;
