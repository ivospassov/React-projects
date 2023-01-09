import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fireEvent } from "@testing-library/react";

beforeEach(() => {
  render(<App />);
});

describe("assert text values in app", () => {
  test("render first title", () => {
    const title = screen.getByText(/groceries/i);
    expect(title).toBeInTheDocument();
  });

  test("render date", () => {
    const dates = screen.getAllByText("2022");
    expect(dates.length).toEqual(3);
  });

  test("render price", () => {
    const date = screen.getByText("$1300", { exact: false });
    expect(date).toBeInTheDocument();
  });
});

describe("render expenses by year; test filter functionality", () => {
  test('number of options equals 4', () => {
    const optionsLength = screen.getAllByRole('option').length;
    expect(optionsLength).toEqual(4)
  });

  test('assert expenses are filtered if option is selected', () => {
    const initialFilterOption = screen.getByRole('option', { name: '2022' });
    expect(initialFilterOption.selected).toEqual(true)
  });

  test('all options are present', () => {
    const allOptions = screen.getAllByRole('option');
    expect(allOptions).toHaveLength(4)
  });

  test('input fields are present', async () => {
    const titleInput = screen.getByLabelText(/title/i);
    const amountInput = screen.getByLabelText(/amount/i);
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(titleInput, 'Shopping');
    userEvent.type(amountInput, { target: { value: 230.00 } });
    userEvent.type(dateInput, { target: { value: 12/19/2022 } });
    const addButton = screen.getByText('add expense', { exact: false });
    expect(addButton).toBeInTheDocument();

    userEvent.click(addButton);

    // TODO-----------------------------------------
    // does NOT render in the document the new item
    const newExpenseItem = screen.getByText(/shopping/i);
    expect(newExpenseItem).toBeTruthy();
  });
});