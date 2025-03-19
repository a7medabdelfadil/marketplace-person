import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ViewOrganization from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('ViewOrganization Page', () => {
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
    render(<ViewOrganization />);
  });

  it("renders Stanford University heading", () => {
    expect(screen.getByText("Stanford University")).toBeInTheDocument();
  });

  it("renders Request Meeting button", () => {
    expect(screen.getByText("Request Meeting")).toBeInTheDocument();
  });

  it("renders Apply button", () => {
    expect(screen.getByText("Apply")).toBeInTheDocument();
  });

  it("renders Watch Video button", () => {
    expect(screen.getByText("Watch Video")).toBeInTheDocument();
  });

  it("renders Discover Universities section", () => {
    expect(screen.getByText("Discover Universities")).toBeInTheDocument();
  });

  it("renders stats cards", () => {
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("97%")).toBeInTheDocument();
    expect(screen.getByText("34+")).toBeInTheDocument();
    expect(screen.getByText("100+")).toBeInTheDocument();
  });

  it("renders Most Popular Scholarship section", () => {
    expect(screen.getAllByText("Most Popular Scholarship").length).toBeGreaterThan(0);
  });

  it("renders Courses Record section", () => {
    expect(screen.getByText("Courses Record")).toBeInTheDocument();
  });
});
