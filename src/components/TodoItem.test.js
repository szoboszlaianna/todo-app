import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem test', () => {
  test('Check if title is correct', () => {
    render(<TodoItem title='Empty trash' description='Take out trash' id={0} />);
    const titleElement = screen.getByText('Empty trash');
    expect(titleElement).toBeInTheDocument();
  });

  test('Check if description is correct', () => {
    render(<TodoItem title='Wash hands' description='Use soap' id={1} />);
    const titleElement = screen.getByText('Use soap');
    expect(titleElement).toBeInTheDocument();
  });

  test('Check if delete button is clickable', () => {
    const onClick = jest.fn();
    render(<TodoItem title='Cook dinner' description='Use recipe' id={1} onDelete={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
