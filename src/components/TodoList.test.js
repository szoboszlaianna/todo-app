import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

describe('TodoList test', () => {
  const todos = [
    { title: 'a', description: 'aa', id: 1 },
    { title: 'b', description: 'bb', id: 2 },
  ];
  test('TodoList renders correctly', () => {
    const onClick = jest.fn();
    const list = render(<TodoList todos={todos} onDelete={onClick}></TodoList>);
    expect(list.getByText('aa')).toBeInTheDocument();
    expect(list.getByText('bb')).toBeInTheDocument();
  });
});
