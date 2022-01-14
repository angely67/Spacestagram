import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe("Test", () => {
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  });
  test('renders', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Spacestagram/i);
    expect(linkElement).toBeInTheDocument();
  });
});

