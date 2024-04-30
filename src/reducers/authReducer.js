// reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'LOGIN':
        console.log(`action.type : ${action.type}`);
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload, // Set user data in the state
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null, // Clear user data upon logout

        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  