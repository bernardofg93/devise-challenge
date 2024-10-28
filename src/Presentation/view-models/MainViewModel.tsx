import {AuthUseCase} from "../../Domain/useCaes/auth/Auth";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

const MainViewModel = () => {
   const {saveAuthToken} = useContext(AuthContext)

   const auth = async () => {
      const response = await AuthUseCase(10);
      saveAuthToken(response?.access_token)
      return response?.access_token;
   }

   return {
      auth
   }
}
export default MainViewModel;
