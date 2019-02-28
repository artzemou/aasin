const results = (
  state = [{
    advantage:"test",
    contents:"test",
    description:"test",
    id:4,
    price:0,
    requirement:"test",
    title:"<p>ooOOOOoo</p>"
  }], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
          return action.results;
        default:
            return state;
    }
};

export default results;
