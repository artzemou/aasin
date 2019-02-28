const initialState = {
  isSignedIn: false,
  isAdmin: false,
  errors: [],
  email: '',
  password: ''
}

const signIn = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERRORS':
          return { ...state, errors : [action.error]}
          break

        case 'SET_AUTH':
          return { ...state, ...action.auth}
          break

        default:
          return {
            ...state
          }
    }
}

export default signIn
