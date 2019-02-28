const leaf = (
  state = {}, action) => {
    switch (action.type) {
        case 'SET_LEAF':
          return action.result;
        default:
            return state;
    }
};

export default leaf;
