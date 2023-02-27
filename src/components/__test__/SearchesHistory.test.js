import { render, screen } from "@testing-library/react";
import SearchesHistory from "../searchesHistory";
import { stateContext } from "../../App";

const mockContextValue = {
  containers: ['love', 'live', 'life'],
  handleSearch: jest.fn,
};

const MockContextProvider = ({ children }) => (
  <stateContext.Provider value={mockContextValue}>{children}</stateContext.Provider>
);

describe("should have the search History", () => {
  it("should display the search history items", async () => {
    render(
      <MockContextProvider>
        <SearchesHistory />
      </MockContextProvider>
    );
    
    const listElement = await screen.findByText("live");
    expect(listElement).toBeInTheDocument();
  });
  
  it("should display the search history items", async () => {
    render(
      <MockContextProvider>
        <SearchesHistory />
      </MockContextProvider>
    );
    const listElements = await screen.findAllByTestId("searchHistory");
    const listElement = await screen.findByText("live");
    expect(listElements.length).toBe(3);
  });
});
