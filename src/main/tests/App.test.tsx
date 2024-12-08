import { render, screen } from "@testing-library/react";

import App from "../App.tsx";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/ibn el-rabi/i);
  expect(linkElement).toBeVisible();
});
