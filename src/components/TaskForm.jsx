import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');

    const handlesubmit = (e)=>{
        e.preventDefault();
        addTask({text:task, priority, category, completed: false})
        //Reset State:
        setTask(" ");
        setPriority("Medium")
        setCategory('General')
    }

  return (
      <form onSubmit = {handlesubmit} className="task-form">
        <div id='inp'>
            <input type='text' placeholder='Enter task' value={task}
            onChange={(e)=>setTask(e.target.value)}/>
            <span><button type='submit'>Add Task</button></span>
            <h1>{task}</h1>
        </div>

        <div id='"btns'>
            <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>

            {/* <h1>{task} {priority} {category}</h1> */}
        </div>
      </form>
  )
}
