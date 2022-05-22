import { uniqueNamesGenerator, animals } from 'unique-names-generator';
import { getArrayOfUserIDWithIncomingChange, postNewUserIDWithIncomingChange } from './queryFunctions';
import userIdIsInvalid from './userIdIsInvalid';

const USER_ID_KEY = "userId"

const generateUserId = async (localStorage) => {
    let connectedToServerSuccessfully;
    const arrayOfJsonsContainingUserId = await getArrayOfUserIDWithIncomingChange()
    if (arrayOfJsonsContainingUserId) {
        connectedToServerSuccessfully = true
    } else {
        connectedToServerSuccessfully = false
    }

    let userIdValue;
    let userIdValueIsInvalid = true;
    while (userIdValueIsInvalid) {
        userIdValue = uniqueNamesGenerator({
            dictionaries: [animals],
            separator: "_"
        }) + "_123";

        userIdValueIsInvalid = userIdIsInvalid(userIdValue, arrayOfJsonsContainingUserId)
    }

    if (connectedToServerSuccessfully) {
        await postNewUserIDWithIncomingChange(userIdValue)
    }

    localStorage.setItem(USER_ID_KEY, userIdValue)
}

export default async (localStorage) => {
    // TODO: Comment the line below when you're done debugging 
    // localStorage.removeItem(USER_ID_KEY);

    if (localStorage.getItem(USER_ID_KEY) == null) {
        await generateUserId(localStorage)
    }

    return localStorage.getItem(USER_ID_KEY)
};