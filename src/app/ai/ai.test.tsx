import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AIChat from './page'

describe('AIChat Page', () => {
  beforeEach(() => {
    render(<AIChat />)
  })

  it('renders the main heading and description', () => {
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByText('Ai Assistant')).toBeInTheDocument()
    expect(screen.getByText('The power of AI at your service – Tame the knowledge!')).toBeInTheDocument()
  })

  it('renders the Start a New Chat button', () => {
    expect(screen.getByRole('button', { name: 'Start a new chat' })).toBeInTheDocument()
  })

  it('renders the chat history section', () => {
    expect(screen.getByText('History')).toBeInTheDocument()
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders the chat options (Chat with AI Bot & Talk with AI Bot)', () => {
    expect(screen.getByText('Chat with AI Bot')).toBeInTheDocument()
    expect(screen.getByText('Talk with AI Bot')).toBeInTheDocument()
  })

  it('renders the message input field with a send button', () => {
    expect(screen.getByTestId('type-something')).toBeInTheDocument()
  })

  it('renders the categories section', () => {
    expect(screen.getByText('Health')).toBeInTheDocument()
    expect(screen.getByText('Daily Life')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
  })
})
