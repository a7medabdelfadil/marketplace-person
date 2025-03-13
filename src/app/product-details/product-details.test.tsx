import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetails from './page';

describe('Product Details Page', () => {
  it('renders the product name and price', () => {
    render(<ProductDetails />);
    
    expect(screen.getAllByText(/Mobile/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/\$49.00/i)).toBeInTheDocument();
  });

  it('displays the customer review count', () => {
    render(<ProductDetails />);
    
    expect(screen.getByText(/5 Customer Reviews/i)).toBeInTheDocument();
  });

  it('renders star rating and allows rating selection', () => {
    render(<ProductDetails />);

    const stars = screen.getAllByTestId('star-icon');
    expect(stars.length).toBe(5);

    if (stars[3]) {
      fireEvent.click(stars[3]); // Click on the 4th star
    }
    expect(stars[3]).toHaveClass('text-yellow-500'); // Verify it changes color
  });

  it('allows user to input a review', () => {
    render(<ProductDetails />);
    
    const reviewInput = screen.getByPlaceholderText(/Write your review here.../i);
    fireEvent.change(reviewInput, { target: { value: 'Great product!' } });
    
    expect(reviewInput).toHaveValue('Great product!');
  });

  it('displays related products', () => {
    render(<ProductDetails />);
    
    expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
    expect(screen.getByText(/Smartphone/i)).toBeInTheDocument();
  });

  it('submits a review when the button is clicked', () => {
    render(<ProductDetails />);
    
    const reviewInput = screen.getByPlaceholderText(/Write your review here.../i);
    fireEvent.change(reviewInput, { target: { value: 'Amazing phone!' } });

    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);

    expect(reviewInput).toHaveValue(''); // Ensure input is cleared after submission
  });
});
