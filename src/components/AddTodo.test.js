import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodo from './AddTodo';

describe('AddTodo test', () => {
  const onSubmit = jest.fn();
  let comp = null;

  beforeEach(() => {
    comp = render(<AddTodo onAddTodo={onSubmit} />);
  });

  test('Render basic fields', () => {
    const titleInput = comp.getByRole('textbox', { name: /title/i });
    const descInput = comp.getByRole('textbox', { name: /description/i });
    const button = comp.getByRole('button', { name: /add/i });
    expect(titleInput).toBeInTheDocument();
    expect(descInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('add input and submit', () => {
    const titleInput = comp.getByRole('textbox', { name: /title/i });
    const descInput = comp.getByRole('textbox', { name: /description/i });
    fireEvent.change(titleInput, { target: { value: 'Write homework' } });
    expect(titleInput.value).toBe('Write homework');
    fireEvent.change(descInput, { target: { value: 'Write math homework' } });
    expect(descInput.value).toBe('Write math homework');
    fireEvent.submit(screen.getByLabelText('form'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
