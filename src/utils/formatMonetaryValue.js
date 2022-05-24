const formatMonetaryValue = (amount) => {
    const amountAsStr = handleDecimalPlaces(amount)
    const formattedAmount = handleNegativeSigns(amountAsStr)
    return formattedAmount
};

const handleDecimalPlaces = (amount) => {
    if (amount % 1 !== 0) {
        return Number.parseFloat(amount).toFixed(2)
    } else {
        return "" + amount
    }
}

const handleNegativeSigns = (amountAsStr) => {
    const amountAsNumber = Number(amountAsStr)
    if (amountAsNumber < 0) {
        const positiveAmount = Math.abs(amountAsNumber);
        return `-$${handleDecimalPlaces(positiveAmount)}`
    } else {
        return `$${amountAsStr}`
    }
}

export default formatMonetaryValue