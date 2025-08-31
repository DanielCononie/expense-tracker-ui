import { render, screen } from "@testing-library/react";
import { Login } from "../Login";
import "@testing-library/jest-dom";

describe("Login Page", () => {
  it("should render login page", async () => {
    render(<Login />);

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
});
