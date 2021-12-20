import { fireEvent, render, waitFor } from '@testing-library/vue'
import App from "../src/App.vue";

test("mount component", async () => {
  const screen = render(App);

  expect(screen.getByText(/vitest/i)).toBeTruthy();

  const increaseButton = screen.getByRole('button');
  expect(increaseButton).toBeVisible();
  expect(increaseButton).toHaveTextContent('Increase');

  console.log(increaseButton.onclick)

  expect(screen.getByText(/count: 0/i)).toBeVisible()
  
  await fireEvent.click(increaseButton)

  await waitFor(() => {
    expect(screen.getByText(/count: 1/i)).toBeVisible()
  })
});
