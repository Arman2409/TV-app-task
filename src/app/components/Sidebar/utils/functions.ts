import userData from "../../../data/user.json";

export const getUser = () => {
    const storeUser = localStorage.getItem("user");
    if(storeUser) {
        return JSON.parse(storeUser);
    }
    return userData;
}