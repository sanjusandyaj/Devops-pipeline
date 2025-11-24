import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders AI topic', () => {
  render(<App />);
  const text = screen.getByText(/Artificial Intelligence/i);
  expect(text).toBeInTheDocument();
});
