const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true,
  },

  todoDueDate: {
    type: Date,
    required: true,
  },
});

const todo = mongoose.model('TODO', todoSchema);

module.exports = todo;
