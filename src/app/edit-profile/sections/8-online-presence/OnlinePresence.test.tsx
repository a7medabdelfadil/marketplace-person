import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import OnlinePresence from './OnlinePresence';


describe('OnlinePresence Component', () => {
  it('renders all social media input fields', () => {
    render(<OnlinePresence />);
    
    expect(screen.getByTestId('linkedin-input')).toBeInTheDocument();
    expect(screen.getByTestId('facebook-input')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-input')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-input')).toBeInTheDocument();
    expect(screen.getByTestId('behance-input')).toBeInTheDocument();
    expect(screen.getByTestId('github-input')).toBeInTheDocument();
    expect(screen.getByTestId('stackoverflow-input')).toBeInTheDocument();
    expect(screen.getByTestId('youtube-input')).toBeInTheDocument();
    expect(screen.getByTestId('blog-input')).toBeInTheDocument();
    expect(screen.getByTestId('website-input')).toBeInTheDocument();
    expect(screen.getByTestId('other-input')).toBeInTheDocument();
  });

  it('should allow updating LinkedIn profile link', () => {
    render(<OnlinePresence />);
    
    const linkedInInput = screen.getByTestId('linkedin-input');
    fireEvent.change(linkedInInput, { target: { value: 'linkedin.com/in/newuser' } });
    
    expect(linkedInInput).toHaveValue('linkedin.com/in/newuser');
  });

  it('should allow updating GitHub profile link', () => {
    render(<OnlinePresence />);
    
    const githubInput = screen.getByTestId('github-input');
    fireEvent.change(githubInput, { target: { value: 'github.com/newuser' } });
    
    expect(githubInput).toHaveValue('github.com/newuser');
  });

  it('should trigger Save Changes button without errors', () => {
    render(<OnlinePresence />);
    
    const saveButton = screen.getByText('Save Changes');
    fireEvent.click(saveButton);
    
    expect(saveButton).toBeInTheDocument();
  });
});
