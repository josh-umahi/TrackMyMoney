import AxiosHandler from "../axios/AxiosHandler";

export const getArrayOfUserIDWithIncomingChange = async () => {
    try {
        const arrayOfUserIDWithIncomingChange = await AxiosHandler.get("/userID_with_incomingChange");

        return arrayOfUserIDWithIncomingChange;
    } catch (error) {
        console.log(error);
    }
}

export const getSingleUserIDWithIncomingChange = async (userId) => {
    try {
        const singleUserIDWithIncomingChange = await AxiosHandler.get(`/userID_with_incomingChange/${userId}`);

        return singleUserIDWithIncomingChange["incomingChange"];
    } catch (error) {
        console.log(error);
    }
} 
