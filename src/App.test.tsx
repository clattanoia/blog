/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from '@/App';

test('renders wording', () => {
  render(<App />);
  const text = screen.getByText(/hello/i);
  expect(text.textContent).toEqual('hello ');
});
