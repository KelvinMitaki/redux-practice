const route = require("express").Router();
const Todo = require("../models/Todo");

route.get("/api", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api", async (req, res) => {
  try {
    const { text } = req.body;
    const todo = new Todo({
      body: text
    });
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.delete("/api/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.send({ message: "Deleted successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
