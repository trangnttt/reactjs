import React from 'react'

const TodoListItem = ({ dataTodo }) => {
    return (
        <>
           {dataTodo.length > 0 ?
                dataTodo.map(todo => (
                    <li key={todo.id}>
                        {todo.name}
                    </li>
                ))
                : null}
        </>
    )
}
export default TodoListItem