import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ChangePassword from './page'

describe('ChangePassword Page', () => {
  it('renders the correct title and description', () => {
    render(<ChangePassword />)

    const title = screen.getByText('Set a password')
    expect(title).toBeInTheDocument()

    const description = screen.getByText('Your previous password has been reset. Please set a new password for your account.')
    expect(description).toBeInTheDocument()
  })

  it('has all three password input fields with correct labels and placeholders', () => {
    render(<ChangePassword />)

    const createPasswordInput = screen.getByPlaceholderText('Create Password')
    expect(createPasswordInput).toBeInTheDocument()
    expect(createPasswordInput).toHaveAttribute('type', 'password')

    const newPasswordInput = screen.getByPlaceholderText('New Password')
    expect(newPasswordInput).toBeInTheDocument()
    expect(newPasswordInput).toHaveAttribute('type', 'password')

    const reenterPasswordInput = screen.getByPlaceholderText('Re-enter Password')
    expect(reenterPasswordInput).toBeInTheDocument()
    expect(reenterPasswordInput).toHaveAttribute('type', 'password')
  })

  it('has a confirm button with correct text', () => {
    render(<ChangePassword />)

    const confirmButton = screen.getByRole('button', { name: 'Confirm' })
    expect(confirmButton).toBeInTheDocument()
  })
})
