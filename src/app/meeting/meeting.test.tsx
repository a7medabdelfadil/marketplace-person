import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Meeting from './page';

describe('Meeting', () => {
  beforeEach(() => {
    render(<Meeting />);
  });

  it('renders a heading', () => {
    const heading = screen.getByText('OPream Meeting');
    expect(heading).toBeInTheDocument();
  });

  it('renders "Participants"', () => {
    const participants = screen.getByText('Participants');
    expect(participants).toBeInTheDocument();
  });

  it('renders "Chats"', () => {
    const chats = screen.getByText('Chats');
    expect(chats).toBeInTheDocument();
  });

  it('renders "Groups"', () => {
    const groups = screen.getByText('Groups');
    expect(groups).toBeInTheDocument();
  });

  it('renders "Personal"', () => {
    const personal = screen.getByText('Personal');
    expect(personal).toBeInTheDocument();
  });

  it('renders "Add Participant"', () => {
    const addParticipant = screen.getByText('Add Participant');
    expect(addParticipant).toBeInTheDocument();
  });

  it('renders an input with placeholder "Type your message"', () => {
    const input = screen.getByPlaceholderText('Type your message');
    expect(input).toBeInTheDocument();
  });

  it('renders the microphone icon', () => {
    const micIcon = screen.getByTestId('mic-icon');
    expect(micIcon).toBeInTheDocument();
  });

  it('renders the video icon', () => {
    const videoIcon = screen.getByTestId('video-icon');
    expect(videoIcon).toBeInTheDocument();
  });

  it('renders the settings icon', () => {
    const settingsIcon = screen.getByTestId('settings-icon');
    expect(settingsIcon).toBeInTheDocument();
  });

  it('renders the hang up (end call) icon', () => {
    const hangUpIcon = screen.getByTestId('hangup-icon');
    expect(hangUpIcon).toBeInTheDocument();
  });

  it('renders the input field with placeholder', () => {
    const inputField = screen.getByPlaceholderText('Type your message');
    expect(inputField).toBeInTheDocument();
  });

  it('allows user to type in the input field', async () => {
    const inputField = screen.getByPlaceholderText('Type your message');
    await userEvent.type(inputField, 'Hello');
    expect(inputField).toHaveValue('Hello');
  });

  it('renders the send button', () => {
    const sendButton = screen.getByTestId('send-icon');
    expect(sendButton).toBeInTheDocument();
  });

  it('disables the send button when the input is empty', () => {
    const sendButton = screen.getByTestId('send-icon');
    const inputField = screen.getByPlaceholderText('Type your message');
    
    expect(inputField).toHaveValue('');
    expect(sendButton).toBeDisabled(); 
  });

  it('enables the send button when the input is not empty', async () => {
    const sendButton = screen.getByTestId('send-icon');
    const inputField = screen.getByPlaceholderText('Type your message');

    await userEvent.type(inputField, 'Hello');
    expect(sendButton).not.toBeDisabled();
  });

  it('clears the input field when the send button is clicked', async () => {
    const sendButton = screen.getByTestId('send-icon');
    const inputField = screen.getByPlaceholderText('Type your message');

    await userEvent.type(inputField, 'Hello');
    await userEvent.click(sendButton);
    
    expect(inputField).toHaveValue('');
  });

});
