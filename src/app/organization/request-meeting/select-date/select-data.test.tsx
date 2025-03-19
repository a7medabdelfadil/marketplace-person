import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SelectDate from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('select-data Page', () => {
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
    render(<SelectDate />);
  });

  it("renders University Services heading", () => {
    expect(screen.getByText("University Services")).toBeInTheDocument();
  });

  it("renders Academic Support label", () => {
    expect(screen.getByText("Academic Support")).toBeInTheDocument();
  });

  it("renders 30 Minutes label", () => {
    expect(screen.getByText("30 Minutes")).toBeInTheDocument();
  });

  it("renders Select a Date & Time heading", () => {
    expect(screen.getByText("Select a Date & Time")).toBeInTheDocument();
  });

  it("renders calendar month", () => {
    expect(screen.getByText(/March 2025/i)).toBeInTheDocument();
  });

  it("renders Time Zone section", () => {
    expect(screen.getByText("Time Zone")).toBeInTheDocument();
    expect(screen.getByText(/UTC Time/i)).toBeInTheDocument();
  });
});
