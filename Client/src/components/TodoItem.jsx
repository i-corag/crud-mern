import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { useState } from 'react'
import { baseURL } from '../utils/constant';
import moment from "moment";
import axios from 'axios';


const TodoItem = ({ todo, updating, setUpdateTodoList }) => {

    const date = moment(todo?.todoDueDate).utc().format('YYYY-MM-DD')

    const [error, setError] = useState('')
    const deleteTodo = async () => {
        try {
            await axios.delete(`${baseURL}/delete/${todo?._id}`)
            setUpdateTodoList((prevState) => (!prevState))
        } catch (err) {
            setError(err.message)
        }
    }

    { error && <div>{error}</div> }
    return (
        <li>
            <div className='todo_item'>
                <p>{todo.todoName}</p>
                <div className='icons_container'>
                    <BiEditAlt className='icon' onClick={() => updating(todo?._id, todo?.todoName, date)} />
                    <BiTrash className='icon' onClick={deleteTodo} />
                </div>
            </div>
        </li>
    )
}

export default TodoItem