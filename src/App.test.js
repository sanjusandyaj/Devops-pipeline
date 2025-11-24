import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders AI topic header', () => {
  render(<App />);
  expect(screen.getByText(/Artificial Intelligence/i)).toBeInTheDocument();
});

test('can submit an opinion', () => {
  render(<App />);
  const textarea = screen.getByPlaceholderText(/Write your opinion here/i);
  const button = screen.getByText(/Submit/i);

  fireEvent.change(textarea, { target: { value: 'AI is amazing!' } });
  fireEvent.click(button);

  expect(screen.getByText('AI is amazing!')).toBeInTheDocument();
});
