import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Experience from './Experience';


describe('Experience Component', () => {
  it('renders the experience dropdown correctly', () => {
    render(<Experience />);
    expect(screen.getByText('How many years of experience do you have?')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should allow selecting an experience level', () => {
    render(<Experience />);
    const experienceSelect = screen.getByRole('combobox');
    
    fireEvent.change(experienceSelect, { target: { value: '2 years' } });
    expect(experienceSelect).toHaveValue('2 years');
  });

  it('renders the Add Experience/Activity button', () => {
    render(<Experience />);
    expect(screen.getByText('+ Add Experience/Activity')).toBeInTheDocument();
  });
});
