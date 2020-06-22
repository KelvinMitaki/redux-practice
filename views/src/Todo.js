import React, { Component } from "react";
import { handleChange, handleSubmit } from "./redux/actions";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { handleChange, handleSubmit })(Todo);
