import {Auth} from "../../Domain/entities/Auth";
import {LocalStorage} from "../sources/local/LocalStorage";
import {AuthLocalRepository} from "../../Domain/repositories/AuthLocalRepository";

export class AuthLocalRepositoryImpl implements AuthLocalRepository {
   async save(access_token: Auth): Promise<void> {
      const {save} = LocalStorage();
      save('access_token', JSON.stringify(access_token));
   }

   async getAuth(): Promise<any> {
      const { getItem } = LocalStorage();
      const token = getItem('access_token');
      return JSON.parse(token as any);
   }

   async remove(): Promise<any> {
   }
}
