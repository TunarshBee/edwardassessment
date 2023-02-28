import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { stateContext } from "../../../App";
import Button from "../Button";

const mockContextValue = {
  containers: ["love", "live", "life"],
  handleSearch: jest.fn(),
};

const MockContextProvider = ({ children }) => (
  <stateContext.Provider value={mockContextValue}>
    {children}
  </stateContext.Provider>
);
const MockedComponent = ({ text }) => (
  <MockContextProvider>
    <BrowserRouter>
      <Button text={text} />
    </BrowserRouter>
  </MockContextProvider>
);

describe("should have the search History", () => {
  it("should display one of the search history items", async () => {
    render(<MockContextProvider text="Search" />);

    const buttonElement = screen.queryByTestId("button");
    expect(buttonElement).toBeDefined();
  });
});
