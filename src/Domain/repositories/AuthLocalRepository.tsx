import {Auth} from "../entities/Auth";

export interface AuthLocalRepository {
   save(access_token: Auth): Promise<void>;
   getAuth(): Promise<Auth>;
   remove(): Promise<void>;
}
