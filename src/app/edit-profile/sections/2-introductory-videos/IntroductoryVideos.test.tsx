import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import IntroductoryVideos from './IntroductoryVideos';


describe('IntroductoryVideos Component', () => {
  it('renders the component correctly', () => {
    render(<IntroductoryVideos />);
    
    expect(screen.getByText('Record Introductory Videos')).toBeInTheDocument();
    expect(screen.getByText(/introduce yourself/i)).toBeInTheDocument();
    expect(screen.getByText('Record Videos')).toBeInTheDocument();
    expect(screen.getByAltText('Intro Video')).toBeInTheDocument();
  });

  it('should render the video icon correctly', () => {
    render(<IntroductoryVideos />);
    const videoIcon = screen.getAllByRole('img');
    expect(videoIcon.length).toBeGreaterThan(0); // Checks if icons exist
  });

  it('should allow clicking the Record Videos button', () => {
    render(<IntroductoryVideos />);
    
    const recordButton = screen.getByText('Record Videos');
    fireEvent.click(recordButton);
    
    expect(recordButton).toBeInTheDocument(); // Ensures button still exists after clicking
  });
});
