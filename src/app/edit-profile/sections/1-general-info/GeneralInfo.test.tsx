import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GeneralInfo from "./GeneralInfo";

describe("GeneralInfo Component", () => {
  it("renders the GeneralInfo component correctly", () => {
    render(<GeneralInfo />);

    expect(screen.getByText("Profile Photo")).toBeInTheDocument();
    expect(screen.getByText("Upload Your Photo")).toBeInTheDocument();
    expect(screen.getByText("Your Personal Info")).toBeInTheDocument();
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Birthdate")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getAllByText("Marital Status").length).toBeGreaterThan(0);
    expect(screen.getByText("Your Location")).toBeInTheDocument();
    expect(screen.getByText("Your Contact Info")).toBeInTheDocument();
    expect(screen.getByText("Save Changes")).toBeInTheDocument();
  });

  it("should update gender selection", () => {
    render(<GeneralInfo />);

    const maleRadio = screen.getByLabelText("Male");
    const femaleRadio = screen.getByLabelText("Female");

    expect(maleRadio).toBeChecked(); // Default is Male

    fireEvent.click(femaleRadio);
    expect(femaleRadio).toBeChecked();
    expect(maleRadio).not.toBeChecked();
  });

  it("should update marital status selection", () => {
    render(<GeneralInfo />);

    const singleRadio = screen.getByLabelText("Single");
    const marriedRadio = screen.getByLabelText("Married");

    expect(singleRadio).toBeChecked(); // Default is Single

    fireEvent.click(marriedRadio);
    expect(marriedRadio).toBeChecked();
    expect(singleRadio).not.toBeChecked();
  });

  it("should allow entering text in the First Name and Last Name fields", () => {
    render(<GeneralInfo />);

    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    expect(firstNameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
  });

  it("should select a birthdate correctly", () => {
    render(<GeneralInfo />);

    const daySelect = screen.getByTestId("day-select");
    const monthSelect = screen.getByTestId("month-select");
    const yearSelect = screen.getByTestId("year-select");

    fireEvent.change(daySelect, { target: { value: "5" } });
    fireEvent.change(monthSelect, { target: { value: "3" } });
    fireEvent.change(yearSelect, { target: { value: "2000" } });

    expect(daySelect).toHaveValue("5");
    expect(monthSelect).toHaveValue("3");
    expect(yearSelect).toHaveValue("2000");
  });

  it("should allow selecting country, city, and area", () => {
    render(<GeneralInfo />);

    const countrySelect = screen.getByTestId("country-select");
    const citySelect = screen.getByTestId("city-select");
    const areaSelect = screen.getByTestId("area-select");

    fireEvent.change(countrySelect, { target: { value: "USA" } });
    fireEvent.change(citySelect, { target: { value: "New York" } });
    fireEvent.change(areaSelect, { target: { value: "Brooklyn" } });

    expect(countrySelect).toHaveValue("USA");
    expect(citySelect).toHaveValue("New York");
    expect(areaSelect).toHaveValue("Brooklyn");
  });

  it("should allow entering mobile number and alternative number", () => {
    render(<GeneralInfo />);

    const mobileInput = screen.getByLabelText("Mobile Number");
    const alternativeInput = screen.getByLabelText("Alternative Number");

    fireEvent.change(mobileInput, { target: { value: "1234567890" } });
    fireEvent.change(alternativeInput, { target: { value: "0987654321" } });

    expect(mobileInput).toHaveValue("1234567890");
    expect(alternativeInput).toHaveValue("0987654321");
  });

  it("should trigger save button without errors", () => {
    render(<GeneralInfo />);

    const saveButton = screen.getByText("Save Changes");
    fireEvent.click(saveButton);

    expect(saveButton).toBeInTheDocument(); // Just ensuring it still exists
  });
});
