import { uniqueNamesGenerator, animals } from 'unique-names-generator';
import AxiosHandler from '../axios/AxiosHandler';
import userIdIsInvalid from './userIdIsInvalid';

const USER_ID_KEY = "userId"

const generateUserId = async (localStorage) => {
    let userIdValue;
    let userIdValueIsInvalid = true;

    let arrayOfJsonsContainingUserId;
    try {
        arrayOfJsonsContainingUserId = await AxiosHandler.get("/userID_with_incomingChange");
        arrayOfJsonsContainingUserId = arrayOfJsonsContainingUserId.data
    } catch (error) {
        console.log(error);
    }

    while (userIdValueIsInvalid) {
        userIdValue = uniqueNamesGenerator({
            dictionaries: [animals],
            separator: "_"
        }) + "_123";

        userIdValueIsInvalid = userIdIsInvalid(userIdValue, arrayOfJsonsContainingUserId)
        console.log(userIdValueIsInvalid);
    }

    localStorage.setItem(USER_ID_KEY, userIdValue)
}

export default async (localStorage) => {
    // localStorage.removeItem(USER_ID_KEY); // Only for debugging purposes 

    if (localStorage.getItem(USER_ID_KEY) == null) {
        await generateUserId(localStorage)
    }

    return localStorage.getItem(USER_ID_KEY)
};