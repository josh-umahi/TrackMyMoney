export default (moneyAmount) => {
    if (moneyAmount < 0) {
        const positiveAmount = Math.abs(moneyAmount);
        return `-$${positiveAmount}`
    } else {
        return `$${moneyAmount}`
    }
};
