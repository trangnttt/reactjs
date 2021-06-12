import React from 'react'

const TodoListItem = ({ dataTodo }) => {
    const CheckDone = () => {
        const checkDone = ! checkDone
    }
    return (
        <>
           {dataTodo.length > 0 ?
                dataTodo.map(todo => (
                    <li key={todo.id} onClick={isComplete}>
                        {todo.name}
                    </li>
                ))
                : null}
        </>
    )
}
export default TodoListItem