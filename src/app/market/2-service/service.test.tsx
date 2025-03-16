import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Service from "./Service";

describe("Product page static content", () => {
  beforeEach(() => {
    render(<Service />);
  });

  it("renders boost learning heading", () => {
    const boostText = screen.getByText("Boost Your Learning Journey:");
    expect(boostText).toBeInTheDocument();
  });

  it("renders interactive lessons heading", () => {
    const interactiveText = screen.getByText(
      "Interactive Lessons, Study Kits, and Expert Advice"
    );
    expect(interactiveText).toBeInTheDocument();
  });

  it("renders view all services heading", () => {
    const viewServicesText = screen.getAllByText("View all Services");
    expect(viewServicesText.length).toBeGreaterThan(0);
  });

  it("renders top product heading", () => {
    const topProductText = screen.getByText("Top product");
    expect(topProductText).toBeInTheDocument();
  });

  it("renders 'View all products' section", () => {
    expect(screen.getAllByText("View all Services")[0]).toBeInTheDocument();
  });

});
