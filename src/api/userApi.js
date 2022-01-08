import axiosClient from "./axiosClient";

let config = {
    headers: {
        'Content-type': 'application/json',
    }
}
const userApi = {
    login(data)
    {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2IMYMWprNOBFJEbVwCrjXMgRky8A1lOU';
        return axiosClient.post(url,data, config);
    },

    register(data)  
    {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2IMYMWprNOBFJEbVwCrjXMgRky8A1lOU';
        return axiosClient.post(url,data , config);
    },

    // getUser(idToken){
    //     const url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD2IMYMWprNOBFJEbVwCrjXMgRky8A1lOU';
    //     return axiosClient.post(url , idToken);
    // }
};
export default userApi;