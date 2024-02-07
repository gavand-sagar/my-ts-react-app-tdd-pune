import { render, screen } from "@testing-library/react";
import Parent from "./Parent";

test('parent child', () => {
  render(<Parent />);
  const amit = screen.getByText('Child');
  expect(amit).toBeInTheDocument();
});