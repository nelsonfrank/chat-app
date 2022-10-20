import { act, render, screen } from "@testing-library/react";
import ErrorScreen from "./ErrorScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("ErrorScreen page test", () => {
  test("renders the error page", async () => {
    render(
      <Router>
        <Provider store={store}>
          <ErrorScreen />
        </Provider>
      </Router>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Oops!");
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go Home" })).toBeInTheDocument();
  });
});
