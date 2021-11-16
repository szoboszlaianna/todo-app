import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <TodoItem id={todo.id} title={todo.title} description={todo.description} onDelete={props.onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
