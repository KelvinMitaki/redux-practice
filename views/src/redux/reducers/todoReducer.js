const INITIAL_STATE = {
  todos: null,
  text: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "HANDLE_CHANGE":
      return { ...state, text: action.payload };
    case "HANDLE_SUBMIT":
      return { ...state, text: "" };
    default:
      return state;
  }
};
