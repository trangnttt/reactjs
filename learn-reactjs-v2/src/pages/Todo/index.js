import React, { useState } from 'react'
import { v4 } from 'uuid'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import './styles/todo.scss'
const Todo = () => {

    const [dataTodo, setDataTodo] = useState([]);
    const [inputText, setInputText] = useState("");
    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const AddTodo = () => {
        const test = [{ id: v4(), name: inputText, isComplete: false }];
        const test2 = [...test, ...dataTodo];
        setDataTodo(test2)
        setInputText("");
    }

    return (
        <div className="todo main">
            <div id="myDIV" className="header">
                <TodoHeader />
                <input type="text" id="myInput"
                    placeholder="Todo..."
                    value={inputText}
                    onChange={handleChange} />
                <button className="addBtn"
                    onClick={AddTodo}
                    disabled={inputText == "" ? "disabled" : ""}>Add</button>
            </div>
            <TodoList dataTodo={dataTodo} />

        </div>
    )
}

export default Todo