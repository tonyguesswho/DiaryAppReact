const initialState = {
  auth: { authenticated: localStorage.getItem('token')},
  authError: '',
  authSuccess: '',
  userProfile:{},
  entries:[],
  entryError:'',
  entry:{}
};

export default initialState;
