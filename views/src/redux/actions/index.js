import axios from "axios";

export const fetchTodos = () => async dispatch => {
  const res = await axios.get("/api");
  dispatch({ type: "FETCH_TODOS", payload: res.data });
};
export const handleSubmit = event => async (dispatch, getState) => {
  event.preventDefault();
  const text = getState().todo.text;
  dispatch({ type: "HANDLE_SUBMIT" });
  await axios.post("/api", { text });
};
export const handleChange = event => {
  return { type: "HANDLE_CHANGE", payload: event.target.value };
};
