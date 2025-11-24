test('renders AI topic', () => {
  render(<App />);
  expect(screen.getByText(/Artificial Intelligence/i)).toBeInTheDocument();
});
