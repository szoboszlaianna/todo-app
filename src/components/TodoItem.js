import React from 'react';
import { ListGroup, CloseButton } from 'react-bootstrap';

const TodoItem = props => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <>
      <ListGroup.Item className='d-flex justify-content-between'>
        <div>
          <h6>{props.title}</h6>
          <p className='mb-0'>{props.description}</p>
        </div>
        <CloseButton onClick={handleDelete} />
      </ListGroup.Item>
    </>
  );
};

export default TodoItem;
