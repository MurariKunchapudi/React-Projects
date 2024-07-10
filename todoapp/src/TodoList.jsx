import { useState } from "react";
import './TodoList.css';
import TodoItem from './TodoItem';
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        console.log('input text>>', text);
        setTodos([...todos, {text, id: Date.now(), completed: false}]);
    };

    const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, text: updtedTask };
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    const toggleComplete = (id) => {
        console.log('todos', todos);
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => 
            todo.id !== id
        ))
    };

    const todosList = todos.map((todo) => (
        <TodoItem
          toggleComplete={toggleComplete}
          update={update}
          deleteTodo={deleteTodo}
          key={todo.id}
          todo={todo}
        />
      ));

    return (
        <div className="todolist-container">
            <h1>Todo List <span>Your personal tool for productivity</span>
            </h1>
            <TodoForm addTodo={addTodo}/>
            <ul>
                {todosList}
            </ul>
        </div>
    )
}

export default TodoList;