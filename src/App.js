import './App.css';

import React, { useState } from 'react';
import Navbar from './Components/Navbar';



function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  let [count, setCount] = useState(0);

  const addSetCount = () => {
    setCount(count + 1);
  }


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
      
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const clearAll = () => {
    setTasks([]);
  }
  

  return (
    
    <div className="App">
      <Navbar/>
      <h1>Things To-Do </h1>
      <br/>
      <div>
        <input
        className='input'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask} className='btn btn-primary bxn' id='btnad'>Add Task</button>
        <button onClick={clearAll} className='btn btn-warning bxn'>Clear All</button>
        
      </div>

      <ul>
        <br/>
      <h4>Task List</h4>
        {tasks.map((task, index) => (
          <li key={index}>
            <hr/>
            <input
              type="checkbox"
              className='chkbx'
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.completed ? (
              <del>{task.text}</del>
            ) : (
              task.text
            )}
            <button className='btn btn-danger bxn' onClick={() => removeTask(index)}>Remove Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
