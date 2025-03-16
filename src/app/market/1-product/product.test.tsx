import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./Product";

describe("Product page static content", () => {
  beforeEach(() => {
    render(<Product />);
  });

  it("renders main titles correctly", () => {
    expect(screen.getByText("Shop for Success:")).toBeInTheDocument();
    expect(screen.getByText("Study Tools You Need")).toBeInTheDocument();
  });

  it("renders explore text", () => {
    expect(
      screen.getByText(
        /explore our wide selection of products designed to enhance your study experience/i
      )
    ).toBeInTheDocument();
  });

  it("renders 'View all products' section", () => {
    expect(screen.getAllByText("View all products")[0]).toBeInTheDocument();
  });

  it("renders cart items correctly", () => {
    expect(screen.getAllByText("Laptop")).toHaveLength(3);
    expect(screen.getAllByText("Smartphone")).toHaveLength(3);
    expect(screen.getAllByText("Wireless Earbuds")).toHaveLength(2);
  });

  it("renders top product section", () => {
    expect(screen.getByText("Top product")).toBeInTheDocument();
  });

  it("renders 'Buy Now' buttons inside products", () => {
    expect(screen.getAllByText("Buy Now")).toHaveLength(2);
  });

  it("renders 'Add To Cart' buttons inside products", () => {
    expect(screen.getAllByText("Add To Cart")).toHaveLength(2);
  });
});
