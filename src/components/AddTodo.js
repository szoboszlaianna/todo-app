import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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
    <>
      <Form className='d-flex flex-column mb-3 p-3' onSubmit={addTodoHandler}>
        <h1 className='m-auto'>To-do app</h1>
        <Form.Group className='mb-3 p-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Title</Form.Label>
          <Form.Control id='title' label='Title' type='text' onChange={titleChangeHandler} value={enteredTitle} required />
        </Form.Group>
        <Form.Group className='mb-3 p-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Description</Form.Label>
          <Form.Control id='description' type='text' label='description' onChange={descriptionChangeHandler} value={enteredDescription} as='textarea' rows={3} required />
        </Form.Group>
        <Button className='align-self-end' type='submit'>
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddTodo;
