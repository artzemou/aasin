const breakpoint = (
  state = 'lg', action) => {
    switch (action.type) {
        case 'SET_CURRENT_BREAKPOINT':
          return action.breakpoint;
        default:
            return state;
    }
};

export default breakpoint;
