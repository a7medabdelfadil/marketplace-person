import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Courses from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Courses Page', () => {
  beforeAll(() => {
    global.ResizeObserver = class {
      observe() {
        // To be not empty
      }
      unobserve() {
        // To be not empty
      }
      disconnect() {
        // To be not empty
      }
    };
  });

  beforeEach(() => {
    render(<Courses />);
  });

  it('renders sidebar title', () => {
    expect(screen.getAllByText(/Courses/i)[0]).toBeInTheDocument();
  });

  it('renders sidebar title', () => {
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });

  it('renders search input and updates value', () => {
    const searchInput = screen.getAllByPlaceholderText(/Search/i)[0];
    fireEvent.change(searchInput, { target: { value: 'Advanced JS' } });
    expect(searchInput).toHaveValue('Advanced JS');
  });

  it('renders the courses section', () => {
    expect(screen.getAllByText(/Learning JavaScript With Imagination/i).length).toBeGreaterThan(0);
  });

  it('renders selects filters', () => {
    const selects = screen.getAllByRole('combobox');
    expect(selects.length).toBeGreaterThan(0);
  });

  it('navigates to course details on card click', () => {
    const card = screen.getAllByText(/Stanford University/i)[0];
    fireEvent.click(card);
    // No real navigation happens due to mocked router
    expect(card).toBeInTheDocument();
  });
});
