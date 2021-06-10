import React from 'react'
import TodoListItem from './TodoListItem'
const TodoList = ({ dataTodo }) => {
    return (
        <ul id="myUL">
            <TodoListItem dataTodo = {dataTodo} />
        </ul>
    )
}
export default TodoList