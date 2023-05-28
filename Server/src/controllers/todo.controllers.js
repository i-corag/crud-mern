const TodoModel = require('../models/todo.models');

const getTodos = async (req, res) => {
  const todos = await TodoModel.find();
  res.send(todos);
};

const createTodo = async (req, res) => {
  const { todoName, todoDueDate } = req.body;
  try {
    await TodoModel.create({ todoName, todoDueDate });
    console.log('TODO Created Successfully');
    res.status(201).send(todo);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todoName, todoDueDate } = req.body;
  try {
    await TodoModel.findByIdAndUpdate(id, { todoName, todoDueDate });
    console.log('TODO Update Successfully');
    res.status(201).send(todo);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await TodoModel.findByIdAndDelete(id);
    console.log('TODO Deleted Successfully');
    res.status(201).send(id);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
