const incomeColors = ['#122331',
    '#153147',
    '#16405f',
    '#164f78',
    '#145f91',
    '#106eac',
    '#0b7ec7',
    '#048de3',
    '#009dff'];
const expenseColors = ['#d85312',
    '#e2751f',
    '#c98b2c',
    '#d39e3a',
    '#dcb048',
    '#e5c258',
    '#eed368',
    '#f7e379',
    '#fff48a',
    '#cc8d4b',
    '#f5a15f'];

export const incomeCategories = [
    { type: 'Business', amount: 0, color: incomeColors[0] },
    { type: 'Investments', amount: 0, color: incomeColors[1] },
    { type: 'Extra income', amount: 0, color: incomeColors[2] },
    { type: 'Deposits', amount: 0, color: incomeColors[3] },
    { type: 'Lottery', amount: 0, color: incomeColors[4] },
    { type: 'Gifts', amount: 0, color: incomeColors[5] },
    { type: 'Salary', amount: 0, color: incomeColors[6] },
    { type: 'Savings', amount: 0, color: incomeColors[7] },
    { type: 'Rental income', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
    { type: 'Bills', amount: 0, color: expenseColors[0] },
    { type: 'Car', amount: 0, color: expenseColors[1] },
    { type: 'Clothes', amount: 0, color: expenseColors[2] },
    { type: 'Travel', amount: 0, color: expenseColors[3] },
    { type: 'Food', amount: 0, color: expenseColors[4] },
    { type: 'Shopping', amount: 0, color: expenseColors[5] },
    { type: 'House', amount: 0, color: expenseColors[6] },
    { type: 'Entertainment', amount: 0, color: expenseColors[7] },
    { type: 'Phone', amount: 0, color: expenseColors[8] },
    { type: 'Pets', amount: 0, color: expenseColors[9] },
    { type: 'Other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
    incomeCategories.forEach((c) => c.amount = 0);
    expenseCategories.forEach((c) => c.amount = 0);
};
