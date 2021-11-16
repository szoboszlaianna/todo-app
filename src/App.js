import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';

function App() {
  const initialList = window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [];
  const [todoList, setTodoList] = useState(initialList);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

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
    <div className='content'>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
