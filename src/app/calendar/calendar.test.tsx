import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import CalendarPage from './page'

describe('Calendar Page', () => {
  beforeEach(() => {
    render(<CalendarPage />)
  })

  it('renders the calendar title and selected month', () => {
    expect(screen.getAllByText('Calendar').length).toBeGreaterThan(0)
    expect(screen.getAllByText('March, 2024').length).toBeGreaterThan(0)
  })

  it('renders the calendar sidebar with "+ Create" button', () => {
    expect(screen.getAllByRole('button', { name: '+ Create' }).length).toBeGreaterThan(0)
  })

  it('renders the calendar view with time slots and days of the week', () => {
    expect(screen.getByText('Time')).toBeInTheDocument()
    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('Mon')).toBeInTheDocument()
    expect(screen.getByText('Tue')).toBeInTheDocument()
    expect(screen.getByText('Wed')).toBeInTheDocument()
    expect(screen.getByText('Thu')).toBeInTheDocument()
    expect(screen.getByText('Fri')).toBeInTheDocument()
    expect(screen.getByText('Sat')).toBeInTheDocument()
  })

  it('renders scheduled events correctly', () => {
    expect(screen.getAllByText('Daily Meeting').length).toBeGreaterThan(0)
    expect(screen.getByText('Task UX/UI')).toBeInTheDocument()
    expect(screen.getByText('Events - Festivals')).toBeInTheDocument()
    expect(screen.getByText('Go to Play - Padel')).toBeInTheDocument()
  })

  it('renders calendar filters for different event types', () => {
    expect(screen.getByText('Meetings')).toBeInTheDocument()
    expect(screen.getByText('Tasks')).toBeInTheDocument()
    expect(screen.getByText('Routine')).toBeInTheDocument()
    expect(screen.getAllByText('Events').length).toBeGreaterThan(0)
  })

  it('renders reminders section', () => {
    expect(screen.getByText('Reminders')).toBeInTheDocument()
    expect(screen.getAllByText('Your Subscription')).toHaveLength(3)
    expect(screen.getAllByText('Review Now')).toHaveLength(3)
  })

  it('renders "Meet Now" button', () => {
    expect(screen.getAllByRole('button', { name: 'Meet Now' }).length).toBeGreaterThan(0)
  })

  it('opens and closes "Create Event" modal when clicking "+ Create"', () => {
    const createButton = screen.getAllByRole('button', { name: '+ Create' })[0]
    if (createButton) {
      fireEvent.click(createButton)
      expect(screen.getByText('Create Meeting')).toBeInTheDocument()
    }

    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)
    expect(screen.queryByText('Create Meeting')).not.toBeInTheDocument()
  })
})
