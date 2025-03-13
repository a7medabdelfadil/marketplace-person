import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import SignIn from './page'

describe('SignIn Page', () => {
  beforeEach(() => {
    render(<SignIn />)
  })

  it('renders the heading and introductory text', () => {
    expect(screen.getByText('Welcome Back')).toBeInTheDocument()
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign Up' })).toHaveAttribute('href', '/sign-up')
  })

  it('renders email and password inputs with correct attributes', () => {
    expect(screen.getByPlaceholderText('Enter Your Email')).toHaveAttribute('type', 'email')
    expect(screen.getByPlaceholderText('Enter Your Password')).toHaveAttribute('type', 'password')
  })

  it('renders "Remember Me" checkbox and toggles correctly', () => {
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders "Forgot Password?" link and "Log in" button', () => {
    expect(screen.getByRole('link', { name: 'Forgot Password?' })).toHaveAttribute('href', '/forgot-password')
    expect(screen.getByText('Log in')).toBeInTheDocument()
  })
})
