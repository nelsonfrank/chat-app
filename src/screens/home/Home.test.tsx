import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";

describe("Home page test", () => {
  test("renders the home page", () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
    expect(screen.getAllByRole("heading")).toHaveLength(3);
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent(
      "Chat Application"
    );
    expect(screen.getAllByRole("heading")[1]).toHaveTextContent(
      "Welcome to group chat application"
    );
    expect(screen.getAllByRole("heading")[2]).toHaveTextContent(
      "To join the group chat, you have to enter your unique username"
    );
    expect(
      screen.getByRole("textbox", { name: "Username" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Join" })).toBeInTheDocument();
  });

  test("Should not be able to submit username if username field is empty", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );

    await userEvent.click(screen.getByRole("button", { name: "Join" }));
    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  test("Should not be able to submit username if username string is less that three charaters", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: "Username" }),
      "ne"
    );
    await userEvent.click(screen.getByRole("button", { name: "Join" }));
    expect(
      screen.getByText("Username must at least be 3 characters or more")
    ).toBeInTheDocument();
  });
});
