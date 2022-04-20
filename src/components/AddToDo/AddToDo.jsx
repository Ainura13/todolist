import React, { useState } from 'react';

const AddToDo = (props) => {
    const [task, setTask] = useState('');
    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        const newTask = {
        task,
        status: false,
        id: Date.now(),
    }

    console.log(newTask);

    props.handleTask(newTask)
    }

    return (
        <div>
            <input type="text" onChange={handleInput}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddToDo;