const initialState = {
  taxi: [],
  car2go: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TAXI':
      return Object.assign({}, state, {
        taxiData: action.data,
      });
    case 'SHOW_CAR2GO':
      return Object.assign({}, state, {
        car2goData: action.data,
      });

    default:
      return state;
  }
};
