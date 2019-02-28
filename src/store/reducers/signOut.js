const initialState = {
  isSignedIn: false,
  isAdmin: false,
  errors: [],
  email: '',
  password: ''
}

const signOut = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
          return { ...state, ...action.auth}
          break

        default:
          return {
            ...state
          }
    }
}

export default signOut
