import * as React from 'react';
import { render, screen } from '@testing-library/react';
import MyButton from './MyButton';
import { addition } from './addition';

jest.mock('./addition');

describe('BUTTON', () => {
  test('MyButton renders the correct value', async () => {
    // Mock the addition function to return a different value
    const mockAddition = jest.fn().mockResolvedValue(500);
    (addition as jest.Mock).mockImplementation(mockAddition);

    render(<MyButton onClick={() => { /* handle click */ }} />);

    const buttonText = await screen.findByText('500', {}, { timeout: 8000 });
    expect(buttonText).toBeInTheDocument();

    // Assert that the mock function was called
    // expect(mockAddition).toHaveBeenCalled();
    
  });
})
