import {ResponseApi} from "../../Data/sources/remote/models/ResponseApi";

export interface AuthRepository {
   auth(corporate_id: number): Promise<ResponseApi>;
}
