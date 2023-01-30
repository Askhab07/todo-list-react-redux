import { useState } from "react";
import { useDispatch } from "react-redux"

const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("")
    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleClick = () => {
        if(newTodo){
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    label: newTodo,
                    id: Math.floor(Math.random(1, 1000000) * 1000000)
                }
            })
            setNewTodo('')
        }
    }
    return (
        <div className="input-wrapper">
            <input value={newTodo} className="input-todo" onChange={handleChange} type="text" />
            <button className="add-button" onClick={handleClick}>ADD TODO</button>
        </div>
    )
}

export default TodoInput