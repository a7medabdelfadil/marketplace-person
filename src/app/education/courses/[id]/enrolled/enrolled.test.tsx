import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enrolled from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Enrolled Page', () => {
  beforeEach(() => {
    render(<Enrolled />);
  });

  it('renders sidebar items', () => {
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Grade/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Courses/i)[0]).toBeInTheDocument();
  });

  it('renders search input', () => {
    expect(screen.getAllByPlaceholderText(/Search/i)[0]).toBeInTheDocument();
  });

  it('renders the main section titles', () => {
    expect(screen.getAllByText(/Courses/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
  });

  it('renders course card with image and title', () => {
    expect(
      screen.getByAltText(/Learning JavaScript With Imagination/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Learning JavaScript With Imagination/i)
    ).toBeInTheDocument();
  });

  it('renders the progress bar', () => {
    expect(screen.getByText(/70%/i)).toBeInTheDocument();
  });
});
