// src/App.test.js
import React from 'react';
// These specific imports are required by all tests
import { render, screen } from '@testing-library/react'; 
import App from './App';

test('renders AI topic', () => {
  render(<App />);
  expect(screen.getByText(/Artificial Intelligence/i)).toBeInTheDocument();
});
