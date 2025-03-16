import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Education from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Education Page', () => {
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
    render(<Education />);
  });

  it('renders sidebar title', () => {
    expect(screen.getAllByText(/My Courses/i)[0]).toBeInTheDocument();
  });

  it('renders search input and updates value', () => {
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });
    expect(searchInput).toHaveValue('React');
  });

  it('renders today task card', () => {
    expect(screen.getByTestId('today-task')).toHaveTextContent(/Today Task/i);
  });

  it('renders statistics cards', () => {
    expect(screen.getByText(/Today's productivity/i)).toBeInTheDocument();
    expect(screen.getByText(/Monthly productivity/i)).toBeInTheDocument();
    expect(screen.getByText(/Meetings attended/i)).toBeInTheDocument();
    expect(screen.getByText(/Task done weekly/i)).toBeInTheDocument();
  });

  it('renders courses section', () => {
    expect(screen.getByText(/Learning JavaScript With Imagination/i)).toBeInTheDocument();
    expect(screen.getByText(/The Complete Graphic Design for Beginners/i)).toBeInTheDocument();
  });

  it('switches tabs in statistics section', () => {
    const tab = screen.getAllByText(/My Courses/i)[1];
    fireEvent.click(tab);
    expect(tab).toHaveClass('border-b-2 border-primary');
  });

  it('renders timeline events', () => {
    expect(screen.getByText(/Daily Standup Call/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Brand Identity Meeting/i).length).toBeGreaterThan(0);
  });
});
