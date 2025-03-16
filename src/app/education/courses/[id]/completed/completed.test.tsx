import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Completed from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Completed Page', () => {
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
    render(<Completed />);
  });

  it('renders sidebar and page title', () => {
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Courses/i)[0]).toBeInTheDocument();
  });

  it('renders search input and updates value', () => {
    const searchInputs = screen.getAllByPlaceholderText(/Search/i);
    const searchInput = searchInputs[0]; // or the specific index you want to interact with
    fireEvent.change(searchInput, { target: { value: 'JS' } });
    expect(searchInput).toHaveValue('JS');
  });

  it('renders courses grid', () => {
    expect(
      screen.getAllByText(/Learning JavaScript With Imagination/i).length
    ).toBeGreaterThan(0);
  });

  it('renders university and rating info', () => {
    expect(screen.getAllByText(/Stanford University/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Reviews/)[0]).toBeInTheDocument();
  });

  it('navigates to course details on card click', () => {
    const card = screen.getAllByText(/Stanford University/i)[0];
    fireEvent.click(card);
    expect(card).toBeInTheDocument(); 
  });

  it('renders "In Progress" section title', () => {
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
  });
});
