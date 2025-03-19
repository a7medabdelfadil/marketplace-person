import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Organization from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Organization Page', () => {
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
    render(<Organization />);
  });

  it("renders main title for universities section", () => {
    const titles = screen.getAllByText("University");
    expect(titles.length).toBeGreaterThan(0);
  });

  it("renders 'Discover Universities' section", () => {
    const discoverText = screen.getByText("Discover Universities");
    expect(discoverText).toBeInTheDocument();
  });

  it("renders 'Top ranking universities' section", () => {
    const topRankText = screen.getByText("Top ranking universities");
    expect(topRankText).toBeInTheDocument();
  });

  it("renders 'See All' buttons", () => {
    const seeAllButtons = screen.getAllByText("SEE ALL");
    expect(seeAllButtons.length).toBeGreaterThan(0);
  });

  it("renders at least one university card", () => {
    const universityCards = screen.getAllByText("Stanford University");
    expect(universityCards.length).toBeGreaterThan(0);
  });

});
