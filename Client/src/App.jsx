import { useEffect, useState } from 'react'
import { baseURL } from './utils/constant';
import axios from 'axios';
import TodoItem from './components/TodoItem'
import './App.css'

function App() {

  const [todoName, setTodoName] = useState('')
  const [todoDueDate, setTodoDueDate] = useState('')
  const [todos, setTodos] = useState([])
  const [updateTodoId, setUpdateTodoId] = useState(null)
  const [updateTodoList, setUpdateTodoList] = useState(false)
  const [error, setError] = useState('')

  const getTodos = async () => {
    try {
      const res = await axios.get(`${baseURL}/`);
      return res.data;
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getTodos().then((res) => {
      console.log('DTA', res);
      setTodos(res);
    });
  }, [updateTodoList])

  const addTodo = async () => {
    try {
      const res = await axios.post(`${baseURL}/create`, { todoName, todoDueDate })
      console.log(res.data)
      setTodoName('')
      setTodoDueDate('')
      setUpdateTodoList((prevState) => (!prevState))
    } catch (err) {
      setError(err.message)
    }
  }

  const updating = (id, text, date) => {
    setTodoName(text)
    setTodoDueDate(date)
    setUpdateTodoId(id)
  }
  const updateTodo = async () => {
    try {
      await axios.put(`${baseURL}/update/${updateTodoId}`, { todoName, todoDueDate })
      setUpdateTodoList((prevState) => (!prevState))
      setUpdateTodoId(null)
      setTodoName('')
      setTodoDueDate('')
    } catch (err) {
      setError(err.message)
    }
  }



  { error && <div>{error}</div> }
  return (
    <main>
      <h1>MY TODOS</h1>
      <form >
        <div className='add_todo'>
          <label className='add_todo_label' htmlFor='todo' >New TODO</label>
          <input className='add_todo_input' id='todo' type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
        </div>

        <div className='add_todo'>
          <label className='add_todo_label' htmlFor='dueDate' >Due Date</label>
          <input className='add_todo_input' id='dueDate' type="date" value={todoDueDate} onChange={(e) => setTodoDueDate(e.target.value)} />
        </div>

        <button className='add_todo_button' onClick={updateTodoId ? updateTodo : addTodo} >{updateTodoId ? "UPDATE" : "ADD"}</button>
      </form>

      <ul className='todo_list'>
        {todos.map((todo) => <TodoItem key={todo?._id} id={todo._id} todo={todo} updating={updating} setUpdateTodoList={setUpdateTodoList} />)}
      </ul>

    </main>
  )
}

export default App
