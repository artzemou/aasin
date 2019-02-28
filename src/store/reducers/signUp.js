const initialState = {
  accountStatus: []
}

const signUp = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCOUNT_STATUS':
        console.log(action.accountStatus)
          return { ...state, accountStatus: [action.accountStatus]}
          break

        default:
          return {
            ...state
          }
    }
}

export default signUp
