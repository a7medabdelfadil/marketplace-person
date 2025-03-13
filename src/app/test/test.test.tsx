import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Test from './page'
 
describe('Test', () => {
  it('renders a test', () => {
    render(<Test />)
 
    const heading = screen.getByText('Test')
 
    expect(heading).toBeInTheDocument()
  })
})