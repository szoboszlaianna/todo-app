import React from 'react';

const TodoItem = props => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <>
      <li key={props.id}>
        {props.title} ({props.description})<button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
};

export default TodoItem;
