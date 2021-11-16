import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = props => {
  return (
    <>
      <ListGroup className='p-3'>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} title={todo.title} description={todo.description} onDelete={props.onDelete} />
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
