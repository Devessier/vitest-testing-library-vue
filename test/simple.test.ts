import { screen, fireEvent, render, waitFor } from '@testing-library/vue'
import App from "../src/App.vue";

test("mount component", async () => {
  render(App);

  expect(screen.getByText(/vitest/i)).toBeTruthy();

  const increaseButton = screen.getByRole('button');
  expect(increaseButton).toBeVisible();
  expect(increaseButton).toHaveTextContent('Increase');

  expect(screen.getByText(/count.*0/i)).toBeVisible()
  
  await fireEvent.click(increaseButton)

  await waitFor(() => {
    expect(screen.getByText(/count.*1/i)).toBeVisible()
  }, {
    timeout: 4_000
  })
});
