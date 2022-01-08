import axiosClient from "./axiosClient";


const productApi = {

    getAll()  
    {
         const baseURL = "https://raw.githubusercontent.com/mahmud-sajib/ecommerce-store-product-data/master/data.json"
        return axiosClient.get(baseURL);
    },
};
export default productApi;