import { act, render, screen } from "@testing-library/react";
import Chats from "./Chats";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";

describe("Chats page test", () => {
  test("renders the chat page", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Chats />
        </Provider>
      </Router>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Group chat");

    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  test("Should be able to send chat", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Chats />
        </Provider>
      </Router>
    );
    expect(screen.getByRole("button", { name: "Send" })).toBeDisabled();
    await userEvent.type(
      screen.getByRole("textbox", { name: "" }),
      "Hello, friend"
    );
    await userEvent.click(screen.getByRole("button", { name: "Send" }));
    expect(screen.getByText("Hello, friend")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
});
