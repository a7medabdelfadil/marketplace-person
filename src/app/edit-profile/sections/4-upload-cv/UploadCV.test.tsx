import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import UploadCV from './UploadCV';


describe('UploadCV Component', () => {
  it('renders the last updated CV date correctly', () => {
    render(<UploadCV />);
    expect(screen.getByText(/You last updated your CV on, November 17, 2024/i)).toBeInTheDocument();
  });

  it('renders the Preview CV and Delete options', () => {
    render(<UploadCV />);
    expect(screen.getByText('Preview CV')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('allows clicking Preview CV', () => {
    render(<UploadCV />);
    const previewCv = screen.getByText('Preview CV');
    fireEvent.click(previewCv);
    expect(previewCv).toBeInTheDocument(); // Ensure the text still exists
  });

  it('allows clicking Delete', () => {
    render(<UploadCV />);
    const deleteCv = screen.getByText('Delete');
    fireEvent.click(deleteCv);
    expect(deleteCv).toBeInTheDocument(); // Ensure the text still exists
  });
});
