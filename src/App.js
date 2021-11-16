import React, { useState } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (title, description) => {
    setTodoList(prev => {
      return [...prev, { title: title, description: description, id: Math.random().toString() }];
    });
  };

  function handleDelete(id) {
    const removeItem = todoList.filter(todo => {
      return todo.id !== id;
    });
    setTodoList(removeItem);
  }

  return (
    <div className='App'>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
