// src/App.test.js
import React from 'react';
// Import 'render' and 'screen' from the testing library
import { render, screen } from '@testing-library/react'; 
import App from './App';

test('renders AI topic', () => {
  // Use the imported render function
  render(<App />);
  
  // Use the imported screen object to find elements
  expect(screen.getByText(/Artificial Intelligence/i)).toBeInTheDocument();
});
