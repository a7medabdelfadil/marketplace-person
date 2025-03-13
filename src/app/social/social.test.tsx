import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Social from './page'
 
describe('Social', () => {
  it('renders social', () => {
    render(<Social />)
 
    const heading = screen.getByText('Events')
 
    expect(heading).toBeInTheDocument()
  });

  it("renders the Social page correctly", () => {
    render(<Social />);

    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("Your Saving")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Contacts")).toBeInTheDocument();
    expect(screen.getByText("The New York Times")).toBeInTheDocument();
  });

  it("toggles sidebars on mobile", () => {
    render(<Social />);

    const toggleButton = screen.getByText("Toggle Sidebars");

    fireEvent.click(toggleButton);
    expect(screen.getByText("Your Saving")).toBeInTheDocument();
    expect(screen.getByText("Contacts")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText("Your Saving")).toBeInTheDocument();
  });

  it("displays a post with correct content", () => {
    render(<Social />);

    expect(
      screen.getByText(
        "We consulted five design experts and tested gear in a 275-square-foot apartment to find the best multifunctional decor to maximize space in a tiny bedroom."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("The New York Times")).toBeInTheDocument();
    expect(screen.getByText("0 Comments")).toBeInTheDocument();
  });

  it("checks for interaction with post actions", () => {
    render(<Social />);

    const starButton = screen.getByText("Star");
    const commentButton = screen.getByText("Comment");
    const shareButton = screen.getByText("Share");

    expect(starButton).toBeInTheDocument();
    expect(commentButton).toBeInTheDocument();
    expect(shareButton).toBeInTheDocument();
  });

})