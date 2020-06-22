import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Todo} />
    </div>
  );
}

export default App;
