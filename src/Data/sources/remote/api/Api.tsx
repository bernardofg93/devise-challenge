import axios from "axios";
import {LocalStorage} from "../../local/LocalStorage";

const Api = axios.create({
   baseURL: 'https://sandbox-api.softpoint.io/interface/v1',
   headers: {
      'Content-Type': 'application/json',
      'Api-Key': 'PO8Rlv4TiYdnZ6NF4uYN/98k6zIGBEkbBG7hBXi9QcI=',
   }
})

//Interceptors
Api.interceptors.request.use(
   (config) => {
      const access_token = LocalStorage().getItem('access_token');
      if (access_token) {
         config.headers['Authorization'] = access_token;
      }
      return config;
   }
)

export { Api }
