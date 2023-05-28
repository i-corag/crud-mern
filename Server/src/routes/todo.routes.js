const { Router } = require('express');
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo.controllers');

const router = Router();

router.get('/', getTodos);
router.post('/create', createTodo);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;
