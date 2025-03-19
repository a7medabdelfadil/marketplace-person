import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RequestMeeting from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('RequestMeeting Page', () => {
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
    render(<RequestMeeting />);
  });

  it("renders University Services heading", () => {
    expect(screen.getByText("University Services")).toBeInTheDocument();
  });

  it("renders welcome scheduling text", () => {
    expect(
      screen.getByText(/Welcome to my scheduling page/i)
    ).toBeInTheDocument();
  });

  it("renders Academic Support option", () => {
    expect(screen.getByText("Academic Support")).toBeInTheDocument();
  });

  it("renders Career Guidance option", () => {
    expect(screen.getByText("Career Guidance")).toBeInTheDocument();
  });

  it("renders Mental Health and Well-being option", () => {
    expect(screen.getByText("Mental Health and Well-being")).toBeInTheDocument();
  });

  it("renders Administrative Support option", () => {
    expect(screen.getByText("Administrative Support")).toBeInTheDocument();
  });

  it("renders Research Guidance option", () => {
    expect(screen.getByText("Research Guidance")).toBeInTheDocument();
  });
});
