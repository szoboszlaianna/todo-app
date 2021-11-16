import React, { useState } from 'react';

const AddTodo = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const addTodoHandler = event => {
    event.preventDefault();
    props.onAddTodo(enteredTitle, enteredDescription);
    setEnteredTitle('');
    setEnteredDescription('');
  };

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = event => {
    setEnteredDescription(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' onChange={titleChangeHandler} value={enteredTitle} />
        <label htmlFor='description'>Description</label>
        <textarea id='description' type='text' onChange={descriptionChangeHandler} value={enteredDescription} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
