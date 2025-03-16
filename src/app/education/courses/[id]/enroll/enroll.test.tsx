import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enroll from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

describe('Enroll Page', () => {
  beforeEach(() => {
    render(<Enroll />);
  });

  it('renders enroll button', () => {
    expect(screen.getByText(/Enroll Now/i)).toBeInTheDocument();
  });

  it('renders offered by section', () => {
    expect(screen.getByText(/Offered by/i)).toBeInTheDocument();
  });
});
