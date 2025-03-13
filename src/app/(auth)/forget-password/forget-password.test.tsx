import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ForgetPassword from './page'

describe('ForgetPassword Page', () => {
  beforeEach(() => {
    render(<ForgetPassword />)
  })

  it('renders the title and description', () => {
    expect(screen.getByText('Forgot password')).toBeInTheDocument()
    expect(
      screen.getByText('Enter the email you registered earlier, then you will be sent an email.')
    ).toBeInTheDocument()
  })

  it('renders the email input with correct attributes', () => {
    const emailInput = screen.getByPlaceholderText('Enter Your Email')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders the "Next" button', () => {
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('renders "Remember password?" message with "Login!" link', () => {
    expect(screen.getByText('Well, remember the password?')).toBeInTheDocument()
    
    const loginLink = screen.getByRole('link', { name: 'Login!' })
    expect(loginLink).toBeInTheDocument()
    expect(loginLink).toHaveAttribute('href', 'sign-in')
  })
})
