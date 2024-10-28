import {Auth} from "../../entities/Auth";
import {AuthLocalRepositoryImpl} from "../../../Data/repositories/AuthLocalRepository";

const { save } = new AuthLocalRepositoryImpl();

export const SaveAuthLocalUseCase = async (auth: Auth) => {
   return await save(auth);
}
