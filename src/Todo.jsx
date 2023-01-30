import { useSelector } from "react-redux"
import { useState } from "react";
import { useDispatch } from "react-redux"

const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }
    return (
       <ul className="todo-list">
            {todos.map((todo) => (
            <div className="todo">
                <li>{todo.label}</li>
                <button className="delete-button" onClick={() => deleteTodo(todo.id)}></button>
            </div>
            ))}
       </ul>
    )
}

export default Todo