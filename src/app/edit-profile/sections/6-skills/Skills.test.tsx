import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Skills from './Skills';


describe('Skills Component', () => {
  it('renders the skills and languages input fields', () => {
    render(<Skills />);
    
    expect(screen.getByPlaceholderText('Type a skill and press enter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type a language and press enter')).toBeInTheDocument();
  });

  it('should allow adding a skill', () => {
    render(<Skills />);
    
    const input = screen.getByPlaceholderText('Type a skill and press enter');
    fireEvent.change(input, { target: { value: 'JavaScript' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('should allow adding a language', () => {
    render(<Skills />);
    
    const input = screen.getByPlaceholderText('Type a language and press enter');
    fireEvent.change(input, { target: { value: 'English' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('should allow clicking Add Skill button', () => {
    render(<Skills />);
    
    const input = screen.getByPlaceholderText('Type a skill and press enter');
    fireEvent.change(input, { target: { value: 'TypeScript' } });
    
    const addButton = screen.getByText('Add Skill');
    fireEvent.click(addButton);
    
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should allow clicking Add Language button', () => {
    render(<Skills />);
    
    const input = screen.getByPlaceholderText('Type a language and press enter');
    fireEvent.change(input, { target: { value: 'Spanish' } });
    
    const addButton = screen.getByText('Add Language');
    fireEvent.click(addButton);
    
    expect(screen.getByText('Spanish')).toBeInTheDocument();
  });
});
