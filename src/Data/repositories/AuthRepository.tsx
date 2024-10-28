import {AuthRepository} from "../../Domain/repositories/AuthRepository";
import {Api} from "../sources/remote/api/Api";
import {ResponseApi} from "../sources/remote/models/ResponseApi";
import {AxiosError} from "axios";

export class AuthRepositoryImpl implements AuthRepository {
   async auth(corporate_id: number): Promise<ResponseApi> {
      try {
         const response = await Api.post<ResponseApi>(
            `/access_token`,
            {},
            {
               params: {corporate_id: corporate_id},
            }
         );
         return Promise.resolve(response.data);
      } catch (e) {
         let error = (e as AxiosError);
         console.log('ERROR: ' + JSON.stringify(error.response?.data));
         const apiError: ResponseApi = JSON.parse(JSON.stringify(error.response?.data));
         return Promise.resolve(apiError)
      }
   }
}
