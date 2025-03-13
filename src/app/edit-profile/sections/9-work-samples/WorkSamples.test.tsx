import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkSamples from './WorkSamples';

describe('WorkSamples Component', () => {
  it('renders the work samples section', () => {
    render(<WorkSamples />);
    
    expect(screen.getByText('Samples of Your Creative and Design Work')).toBeInTheDocument();
    expect(screen.getByText('Upload up to 12 files (Optional)')).toBeInTheDocument();
    expect(screen.getByText('Supported files: .jpg, .png, .gif or .jpeg with max size of 5MB per file')).toBeInTheDocument();
  });

  it('renders the Add Files button', () => {
    render(<WorkSamples />);
    
    const addButton = screen.getByText('+ Add Files');
    expect(addButton).toBeInTheDocument();
  });

  it('should trigger Add Files button without errors', () => {
    render(<WorkSamples />);
    
    const addButton = screen.getByText('+ Add Files');
    fireEvent.click(addButton);
    
    expect(addButton).toBeInTheDocument();
  });
});
