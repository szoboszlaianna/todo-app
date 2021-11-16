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
      <Form className='form d-flex flex-column mb-3 p-3' onSubmit={addTodoHandler} aria-label='form'>
        <h1 className='m-auto'>To-do app</h1>
        <Form.Group className='mb-3 p-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' aria-label='title' name='title' onChange={titleChangeHandler} value={enteredTitle} required />
        </Form.Group>
        <Form.Group area-label='description' className='mb-3 p-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' aria-label='description' name='description' onChange={descriptionChangeHandler} value={enteredDescription} as='textarea' rows={3} required />
        </Form.Group>
        <Button className='align-self-end' type='submit'>
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddTodo;
