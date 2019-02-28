
const isLoading = (state = true, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return  action.isLoading
            break

        default:
            return state
    }
};

export default isLoading
