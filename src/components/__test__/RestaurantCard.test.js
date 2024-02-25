import { render, screen } from "@testing-library/react";
import RestraurantCard from "../RestraurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("it should render restaurant card with props data", () => {
  render(<RestraurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("it should render restaurant card with props data", () => {
    render(<RestraurantCard resData={MOCK_DATA} />);
  
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
  });
