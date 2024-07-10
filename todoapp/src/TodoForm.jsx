import { useState } from "react";
import './TodoForm.css';


const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if(input.trim()) {
            // console.log('input>>',input)
            addTodo(input);
            setInput('');
        }
    }
    
    return (
        <form className="newTodoForm" onSubmit={handleSubmit}>
            <label>Add your Todos</label>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
};

export default TodoForm;