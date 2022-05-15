import { uniqueNamesGenerator, animals } from 'unique-names-generator';
import userIdIsInvalid from './userIdIsInvalid';

const USER_ID_KEY = "userId"

const generateUserId = (localStorage, arrayOfUserIDWithIncomingChange) => {
    let userIdValue;
    let userIdValueIsInvalid = true;

    while (userIdValueIsInvalid) {
        userIdValue = uniqueNamesGenerator({
            dictionaries: [animals],
            separator: "_"
        }) + "_123";

        // TODO: Replace empty array with a json response to {{url}}/userID_with_incomingChange
        userIdValueIsInvalid = userIdIsInvalid(userIdValue, arrayOfUserIDWithIncomingChange)
    }

    localStorage.setItem(USER_ID_KEY, userIdValue)
}

export default (localStorage, arrayOfUserIDWithIncomingChange) => {
    // localStorage.removeItem(USER_ID_KEY); // Only for debugging purposes 

    if (localStorage.getItem(USER_ID_KEY) == null) {
        generateUserId(localStorage, arrayOfUserIDWithIncomingChange)
    }

    return localStorage.getItem(USER_ID_KEY)
};