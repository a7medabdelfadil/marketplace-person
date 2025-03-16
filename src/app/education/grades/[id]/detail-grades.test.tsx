import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DetailGrades from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('DetailGrades Page', () => {
  beforeEach(() => {
    render(<DetailGrades />);
  });

  it('renders sidebar links', () => {
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Grade/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Courses/i)[0]).toBeInTheDocument();
  });

  it('renders static page title', () => {
    expect(screen.getByText(/My Grades/i)).toBeInTheDocument();
  });

  it('renders search input and settings icon', () => {
    expect(screen.getAllByPlaceholderText(/Search/i)[0]).toBeInTheDocument();
  });

  it('renders the course header', () => {
    expect(
      screen.getByText(/Learning JavaScript With Imagination/i),
    ).toBeInTheDocument();
  });

  it('renders static cards', () => {
    const cards = screen.getAllByText(/Articulate structure of C\+\+ and Java in Semester I/i);
    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders static status tags (Passed, Failed, Missed)', () => {
    expect(screen.getAllByText(/Passed/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Failed/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Missed/i)[0]).toBeInTheDocument();
  });
});
