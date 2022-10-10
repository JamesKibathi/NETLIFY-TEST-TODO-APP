import React from 'react'
function Todo({ task, category, due_date }) {


    return (

        <>
           
            <h2>Task</h2>
            <p>{task}</p>
            <h2>Category</h2>
            <p>{category}</p>
            <h3>Due date</h3>
            <p>{due_date}</p>

        </>

    )
}

export default Todo;