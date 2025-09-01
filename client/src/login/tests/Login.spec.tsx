import { render, screen } from "@testing-library/react";
import { Login } from "../Login";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Login Page", () => {
  it("should render login page", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const username = screen.getByText("Username");
    const password = screen.getByText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });
    const createAccountButton = screen.getByRole("button", {
      name: "Create Account",
    });

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(createAccountButton).toBeInTheDocument();
  });

  it("should fire error message when login button is clicked", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /login/i }));

    const err = await screen.findByText(/username and password are required/i);
    expect(err).toBeInTheDocument();

    await user.type(screen.getByLabelText(/username/i), "daniel");
    await user.type(screen.getByLabelText(/password/i), "secret");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(
      screen.queryByText(/username and password are required/i),
    ).not.toBeInTheDocument();
  });
});
