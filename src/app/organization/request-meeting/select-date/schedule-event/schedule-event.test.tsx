import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ScheduleEvent from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('ScheduleEvent Page', () => {
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
    render(<ScheduleEvent />);
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

  it("renders Enter Details section", () => {
    expect(screen.getByText("Enter Details")).toBeInTheDocument();
  });

  it("renders input fields", () => {
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kindly state the idea briefly/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Are there any specific requirements/i)).toBeInTheDocument();
  });

  it("renders Schedule Event button", () => {
    expect(screen.getByRole("button", { name: /Schedule Event/i })).toBeInTheDocument();
  });

});
