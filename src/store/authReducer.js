const initialState = {
    email: '',
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return { ...state, email: action.payload }
      
      default:
        return state
    }
  }
  
  export default authReducer