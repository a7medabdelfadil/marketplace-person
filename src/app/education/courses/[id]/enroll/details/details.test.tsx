import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EnrollDetails from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('EnrollDetails Page', () => {
  beforeEach(() => {
    render(<EnrollDetails />);
  });

  it('renders download links', () => {
    expect(screen.getByText(/Download SubRip/i)).toBeInTheDocument();
    expect(screen.getByText(/Download Text/i)).toBeInTheDocument();
  });

  it('renders course transcript section', () => {
    expect(screen.getByText(/Course Transcript/i)).toBeInTheDocument();
  });
});
