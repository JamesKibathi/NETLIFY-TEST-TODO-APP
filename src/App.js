import React, { useState, useEffect } from 'react';
import Todo from "./Todo"
import TodoForm from './TodoForm';
import './App.css';
import { Routes, Route } from "react-router-dom"

// Refresh browser after submit
// We must have a "side effect" attached to user effect array
// the side effect must be a state
// from form submit child to parent

function App() {

  const [toDolistData, setToDoListData] = useState([])

  useEffect(() => {

    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {

        setToDoListData(toDolistData => data)
        // 
      })
  }, []);

  const tasks = toDolistData.map((elem, index) => {
    return <Todo key={index} task={elem.task} category={elem.category} due_date={elem.due_date} />

  })
  //console.log(tasks)


  return (
    <>
      <Routes>
        <Route path="./form" element={<TodoForm />} />

        <Route path="./tasks" element={tasks}/>

      </Routes>
      <h1>KARIBU KWA TO-DO LIST ZANGU</h1>
     {/* <TodoForm />*/}
      <h2>Here are all Todos From Db</h2>
      {tasks}
    </>
  );
}

export default App;
