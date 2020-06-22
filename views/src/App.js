import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Todo from "./Todo";
import { fetchTodos } from "./redux/actions";
import { connect } from "react-redux";

export class App extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Todo} />
      </div>
    );
  }
}

export default connect(null, { fetchTodos })(App);
