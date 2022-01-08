import axios from "axios";

const axiosClient = axios.create({
    headers: {
        'Content-type': 'application/json',
    },

});

//Interceptors
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response?.data) return response.data;
    return response;
  },  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
  );

export default axiosClient;