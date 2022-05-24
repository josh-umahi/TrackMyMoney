import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import Form from "../components/Main/Form/Form";
import formatDate from "../utils/formatDate";

describe("Transaction type Tests", () => {
    it("Transaction type starts out as Income", () => {
        const { getByTestId } = render(<Form />);
        const transactionTypeSelect = getByTestId("transactionTypeSelect")
        expect(transactionTypeSelect).toHaveValue("Income")
    })
})

describe("Date Tests", () => {
    it("Date starts out as today's date", () => {
        const { getByTestId } = render(<Form />);
        const dateInput = getByTestId("dateInput")
        const todaysDate = formatDate(new Date())
        expect(dateInput).toHaveValue(todaysDate)
    })
})

describe("Create Button Tests", () => {
    it("Create Button starts out disabled", () => {
        const { getByTestId } = render(<Form />);
        const createButton = getByTestId("createButton")

        expect(createButton).toHaveClass("Mui-disabled");
    })
})
