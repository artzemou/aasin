const styles = (
  state = [], action) => {
    switch (action.type) {
        case 'SET_COMPONENT_STYLES':
          return action.result;
        default:
            return state;
    }
};

export default styles;
