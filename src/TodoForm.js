import { useState } from "react";

function TodoForm() {


    const [newTodo, setnewTodo] = useState({})

    function handleInput(e) {

        let value = e.target.value;
        let inputName = e.target.name;


        //let data={[inputName]:value}

        setnewTodo({ ...newTodo, [inputName]: value })

        // state setter function is asynchronous, takes time to return value so we must use arrow function


        //console.log(newTodo);

    }

    function handleAddTodo(e) {
        e.preventDefault()
        console.log(newTodo)

        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    //console.log(newTodo);

    return (

        <form onSubmit={handleAddTodo}>
            <label>
                task:
                <input type="text" onBlur={handleInput} name="task" />
            </label>
            <label>
                category:
                <input type="text" onBlur={handleInput} name="category" />
            </label>
            <label>
                Due-Date:
                <input type="text" onBlur={handleInput} name="due_date" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )

}

export default TodoForm;
