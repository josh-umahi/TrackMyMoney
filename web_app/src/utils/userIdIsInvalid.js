export default (theId, theArrayOfJsons) => {
    return theArrayOfJsons.some(jsonElement => jsonElement.id === theId);
};

/*
  An Example of "theArrayOfJsons":
  [
    {
        "id": "myID1",
        "incomingChange": {
            "isIncome": true,
            "isExpense": false,
            "type": "Invesments",
            "amount": 250
        }
    },
    {
        "id": "myID12",
        "incomingChange": null
    }
]
*/