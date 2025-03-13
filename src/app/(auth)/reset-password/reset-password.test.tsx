import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ResetPassword from './page'

// Mock ResizeObserver
global.ResizeObserver = class {
  observe() {
    // To be not empty
  }
  unobserve() {
    // To be not empty
  }
  disconnect() {
    // To be not empty
  }
}

describe('ResetPassword Page', () => {
  beforeEach(() => {
    render(<ResetPassword />)
  })

  it('renders the title and description with email', () => {
    expect(screen.getByText('Code Verification')).toBeInTheDocument()
    expect(screen.getByText('Write the Code sent to')).toBeInTheDocument()
    expect(screen.getByText('User@gmail.com')).toBeInTheDocument()
  })

  it('renders four OTP input fields', () => {
    const otpInputs = screen.getAllByTestId('otp-slot')
    expect(otpInputs).toHaveLength(4)
  })

  it('renders the "Verify" button', () => {
    expect(screen.getByRole('button', { name: 'Verify' })).toBeInTheDocument()
  })

  it('renders "Resend Code" link', () => {
    expect(screen.getByText("Didn't you receive the Code?")).toBeInTheDocument()

    const resendLink = screen.getByRole('link', { name: 'Resend Code' })
    expect(resendLink).toBeInTheDocument()
    expect(resendLink).toHaveAttribute('href', 'sign-in')
  })
})
