import { render, screen, fireEvent } from "@testing-library/react";
import SearchesHistory from "../searchesHistory";
import { stateContext } from "../../App";

const mockContextValue = {
  containers: ['love', 'live', 'life'],
  handleSearch: jest.fn(),
};

const MockContextProvider = ({ children }) => (
  <stateContext.Provider value={mockContextValue}>{children}</stateContext.Provider>
);
const MockedComponent = () => (
  <MockContextProvider>
    <SearchesHistory />
  </MockContextProvider>
);

describe("should have the search History", () => {
  it("should display the search history items", async () => {
    render(<MockedComponent />);
    
    const listElement = await screen.findByText("live");
    expect(listElement).toBeInTheDocument();
  });

  it("should display the search history items", async () => {
    render(<MockedComponent />);
    const listElements = await screen.findAllByTestId("searchHistory");
    expect(listElements.length).toBe(3);
  });


});
