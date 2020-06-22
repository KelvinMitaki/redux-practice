const INITIAL_STATE = {
  todos: null,
  text: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "HANDLE_CHANGE":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
