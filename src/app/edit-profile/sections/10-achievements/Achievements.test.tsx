import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Achievements from './Achievements';

describe('Achievements Component', () => {
  it('renders the achievements section with a textarea and save button', () => {
    render(<Achievements />);

    expect(screen.getByText('Achievements')).toBeInTheDocument();
    expect(screen.getByLabelText('Add Achievements')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Describe your achievements...')).toBeInTheDocument();
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
  });

  it('allows typing in the achievements textarea', () => {
    render(<Achievements />);
    
    const textarea = screen.getByPlaceholderText('Describe your achievements...');
    fireEvent.change(textarea, { target: { value: 'Won a coding competition' } });

    expect(textarea).toHaveValue('Won a coding competition');
  });

  it('updates the remaining character count correctly', () => {
    render(<Achievements />);
    
    const textarea = screen.getByPlaceholderText('Describe your achievements...');
    fireEvent.change(textarea, { target: { value: 'Test' } });

    expect(screen.getByText('996 characters remaining (max 1000)')).toBeInTheDocument();
  });

  it('should trigger Save Changes button without errors', () => {
    render(<Achievements />);
    
    const saveButton = screen.getByText('Save Changes');
    fireEvent.click(saveButton);

    expect(saveButton).toBeInTheDocument();
  });
});
