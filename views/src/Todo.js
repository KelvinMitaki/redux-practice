import React, { Component } from "react";
import { handleChange, handleSubmit } from "./redux/actions";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    const { handleChange, handleSubmit, todos, text } = this.props;
    console.log(text);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={text} />
          <button>Add Todo</button>
        </form>
        {todos &&
          todos.map(todo => (
            <div key={todo._id}>
              <p> {todo.body}</p>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    text: state.todo.text
  };
};
export default connect(mapStateToProps, { handleChange, handleSubmit })(Todo);
