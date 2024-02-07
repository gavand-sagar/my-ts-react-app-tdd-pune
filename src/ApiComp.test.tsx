import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import ApiComp from './ApiComp';
import { getFacts } from './apis';

jest.mock('./apis')

test('Fetches data and sets loading state', async () => {
  (getFacts as jest.Mock).mockResolvedValue({ data: { fact: "Sagar" } })
  render(<ApiComp />);

  const loadingText = screen.getByText("Loading")
  expect(loadingText).toBeInTheDocument();

  const button = screen.getByText('Load Data')
  expect(button).toBeInTheDocument();

  fireEvent.click(button);


  const apiResult = await screen.findByText("Sagar");
  expect(apiResult).toBeInTheDocument()

});