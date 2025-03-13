import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Signup from './page'

describe('Signup Page', () => {
  beforeEach(() => {
    render(<Signup />)
  })

  it('renders the title and description', () => {
    expect(screen.getByText('Create a new account')).toBeInTheDocument()
    expect(
      screen.getByText("It's not difficult, you just need to enter some data and you're done!")
    ).toBeInTheDocument()
  })

  it('renders all input fields with correct placeholders', () => {
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Your Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Your Nationality')).toBeInTheDocument()
  })

  it('renders the password input field', () => {
    const passwordInput = screen.getByPlaceholderText('Write Your Password')
    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders dropdowns for Role, Role Person, and Gender', () => {
    expect(screen.getByLabelText('Role')).toBeInTheDocument()
    expect(screen.getByLabelText('Role Person')).toBeInTheDocument()
    expect(screen.getByLabelText('Gender')).toBeInTheDocument()
  })

  it('renders file upload section', () => {
    expect(screen.getByText('A picture of you next to your ID card')).toBeInTheDocument()
    expect(screen.getByText('Browse or Drop')).toBeInTheDocument()
  })

  it('renders the Terms and Privacy Policy checkbox', () => {
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()

    const label = screen.getByText('I agree to the Terms and Privacy Policy')
    expect(label).toBeInTheDocument()
  })

  it('toggles the Terms checkbox on click', () => {
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders the Sign Up button', () => {
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument()
  })
})
