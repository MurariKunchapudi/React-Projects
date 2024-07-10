import { useState } from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({todo, update, toggleComplete, deleteTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.text);
    const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => {
        deleteTodo(todo.id);
      };
      const toggleFrom = () => {
        setIsEditing(!isEditing);
      };

      const toggleCheckbox = () => {
        if(!isChecked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
      }

      const handleUpdate = e => {
        e.preventDefault();
        update(todo.id, task);
        toggleFrom();
      };
      const handleChange = e => {
        setTask(e.target.value);
      };
      const toggleCompleted = e => {
        toggleComplete(e.target.id);
      };

    let result;
    if(isEditing) {
        result = (
            <div className="TodoItem">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                <input onChange={handleChange} value={task} type="text" />
                <button type='submit'>Save</button>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="TodoItem">
                <li
                    id={todo.id}
                    onClick={toggleCompleted}
                    className={isChecked ? 'Todo-task completed' : 'Todo-task'}
                >
                    {todo.text}
                </li>
                <div className="Todo-buttons">
                    <button className="ManageTodoButton" onClick={toggleCheckbox}>
                        <FontAwesomeIcon icon={isChecked ? faCheckSquare : faSquare}/>
                    </button>
                    <button className="ManageTodoButton" onClick={toggleFrom}>
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
                    <button className="ManageTodoButton" onClick={handleClick}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </button>
                </div>
            </div>
        )
    }
    return result;
}

export default TodoItem;