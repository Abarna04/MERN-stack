import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todo'>
      <h1>To-Do List</h1>
      <div >
        <input
          className='t1'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        &nbsp;&nbsp;&nbsp;  
        <button className='b1' onClick={handleAddTodo}>+</button>
      </div>
      <br></br>
      <ul >
        {todos.map((todo, index) => (
          <li className='t2' key={index}>
            {todo}
            &nbsp;&nbsp;&nbsp;  
            <button className='b2' onClick={() => handleRemoveTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
