import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Education from './Education';


describe('Education Component', () => {
  it('renders the education level selection correctly', () => {
    render(<Education />);
    
    expect(screen.getByText("What's your current educational level?"))
      .toBeInTheDocument();
  });

  it('renders the university degrees section', () => {
    render(<Education />);
    expect(screen.getByText("University Degrees")).toBeInTheDocument();
    expect(screen.getByText("Bachelor's Degree in Literature")).toBeInTheDocument();
    expect(screen.getByText("Cairo University, Egypt")).toBeInTheDocument();
    expect(screen.getByText("2011")).toBeInTheDocument();
  });

  it('should allow clicking Add High School button', () => {
    render(<Education />);
    const addButton = screen.getByText("+ Add High School");
    fireEvent.click(addButton);
    expect(addButton).toBeInTheDocument();
  });

  it('should allow clicking Add Certificate button', () => {
    render(<Education />);
    const addButton = screen.getByText("+ Add Certificate");
    fireEvent.click(addButton);
    expect(addButton).toBeInTheDocument();
  });

  it('should allow clicking Add Training button', () => {
    render(<Education />);
    const addButton = screen.getByText("+ Add Training");
    fireEvent.click(addButton);
    expect(addButton).toBeInTheDocument();
  });
});
