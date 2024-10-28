import {AuthRepositoryImpl} from "../../../Data/repositories/AuthRepository";

const { auth  } = new AuthRepositoryImpl();

export const AuthUseCase = async (corporate_id: number) => {
   return await auth(corporate_id);
}
