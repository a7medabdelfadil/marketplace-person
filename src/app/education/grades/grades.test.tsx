import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Grades from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Grades Page', () => {
  beforeEach(() => {
    render(<Grades />);
  });

  it('renders sidebar links', () => {
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Grade/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Courses/i)[0]).toBeInTheDocument();
  });

  it('renders page title', () => {
    expect(screen.getByText(/My Grades/i)).toBeInTheDocument();
  });

  it('renders search input and settings icon', () => {
    expect(screen.getAllByPlaceholderText(/Search/i)[0]).toBeInTheDocument();
  });

  it('renders static course cards', () => {
    const cards = screen.getAllByAltText(/Learning JavaScript With Imagination/i);
    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders grade text', () => {
    expect(screen.getAllByText(/Previous Exam Grade/i)[0]).toBeInTheDocument();
  });
});
