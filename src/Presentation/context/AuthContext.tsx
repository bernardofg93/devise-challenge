import {Auth} from "../../Domain/entities/Auth";
import {createContext} from "react";
import {SaveAuthLocalUseCase} from "../../Domain/useCaes/authLocal/SaveAuthLocal";
import {useState} from "react";

export const authInitialState: Auth = {
   access_token: '',
}

export interface AuthContextProps {
   auth: Auth;
   saveAuthToken: (access_token: Auth) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

   const [auth, setAuth] = useState(authInitialState);

   const saveAuthToken = async (access_token: Auth) => {
      await SaveAuthLocalUseCase(access_token);
      setAuth(access_token);
   }

   return (
      <AuthContext.Provider value={{
         auth,
         saveAuthToken
      }}>
         {children}
      </AuthContext.Provider>
   )
}
