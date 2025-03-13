import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CareerInterests from './CareerInterests';


describe('CareerInterests Component', () => {
  it('renders all sections correctly', () => {
    render(<CareerInterests />);
    
    expect(screen.getAllByText('What is your current career level?').length).toBeGreaterThan(0);
    expect(screen.getByText('What work environment do you prefer?')).toBeInTheDocument();
    expect(screen.getByText('What job titles describe what you are looking for?')).toBeInTheDocument();
    expect(screen.getByText('What job categories are you interested in?')).toBeInTheDocument();
    expect(screen.getByText('What is the minimum salary you would accept?')).toBeInTheDocument();
    expect(screen.getByText('Where would you like to work?')).toBeInTheDocument();
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
  });

  it('should allow selecting a career level', () => {
    render(<CareerInterests />);
    
    const experiencedButton = screen.getByRole('button', { name: /experienced/i });
    fireEvent.click(experiencedButton);
    
    expect(experiencedButton).toHaveClass('border-primary', 'bg-primary/10', 'text-primary');
  });
  
  it('should allow selecting a work environment', () => {
    render(<CareerInterests />);
    
    const onsiteButton = screen.getByRole('button', { name: /on-site/i });
    fireEvent.click(onsiteButton);
    
    expect(onsiteButton).toHaveClass('border-primary', 'bg-primary/10', 'text-primary');
  });
  
  it('should allow adding job titles', () => {
    render(<CareerInterests />);
    
    const input = screen.getByPlaceholderText('Type a job title and press enter');
    fireEvent.change(input, { target: { value: 'Software Engineer' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('should allow adding job categories', () => {
    render(<CareerInterests />);
    
    const input = screen.getByPlaceholderText('Type a category title and press enter');
    fireEvent.change(input, { target: { value: 'IT & Development' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(screen.getByText('IT & Development')).toBeInTheDocument();
  });

  it('should allow entering a salary amount', () => {
    render(<CareerInterests />);
    
    const salaryInput = screen.getByPlaceholderText('Enter amount');
    fireEvent.change(salaryInput, { target: { value: '5000' } });
    
    expect(salaryInput).toHaveValue('5000');
  });

  it('should allow adding locations', () => {
    render(<CareerInterests />);
    
    const locationSelect = screen.getByText('Country');
    fireEvent.change(locationSelect, { target: { value: 'Egypt' } });
    
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    
    expect(screen.getByText('Egypt')).toBeInTheDocument();
  });

  it('should trigger save button without errors', () => {
    render(<CareerInterests />);
    
    const saveButton = screen.getByText('Save Changes');
    fireEvent.click(saveButton);
    
    expect(saveButton).toBeInTheDocument();
  });
});