test('renders something', async () => {
  render(<App />);

  const element = await screen.findByText(/learn react/i);
  expect(element).toBeInTheDocument();
});
