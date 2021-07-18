import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deboint in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/deboint/i);
  expect(linkElement).toBeInTheDocument();
});
