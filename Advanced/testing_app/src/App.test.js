import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link that points to shahi restaurant webpage', () => {
  render(<App />);
  const linkElement = screen.getByText("Shahi restaurant");
  expect(linkElement).toBeInTheDocument();
}); 
