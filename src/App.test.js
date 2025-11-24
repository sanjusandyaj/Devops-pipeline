import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AI topic', () => {
  render(<App />);
  expect(screen.getByText(/Artificial Intelligence/i)).toBeInTheDocument();
});
