import AxiosHandler from "../axios/AxiosHandler";

export const getArrayOfUserIDWithIncomingChange = () => {
    try {
        const arrayOfUserIDWithIncomingChange = await AxiosHandler.get("/userID_with_incomingChange");

        return arrayOfUserIDWithIncomingChange;
    } catch (error) {
        console.log(error);
    }
}

export const getSingleUserIDWithIncomingChange = (userId) => {
    try {
        const singleUserIDWithIncomingChange = await AxiosHandler.get(`/userID_with_incomingChange/${userId}`);

        return singleUserIDWithIncomingChange["incomingChange"];
    } catch (error) {
        console.log(error);
    }
}

export const getIncomeCategories = () => {
    try {
        const incomeCategories = await AxiosHandler.get("/incomeCategories");

        return incomeCategories;
    } catch (error) {
        console.log(error);
    }
}

export const getExpenseCategories = () => {
    try {
        const expenseCategories = await AxiosHandler.get("/expenseCategories");

        return expenseCategories;
    } catch (error) {
        console.log(error);
    }
}
