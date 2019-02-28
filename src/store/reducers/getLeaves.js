const leaves = (
  state = [], action) => {
    switch (action.type) {
        case 'SET_LEAVES':
          return action.results;
        default:
            return state;
    }
};

export default leaves;
