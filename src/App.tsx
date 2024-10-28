import React from 'react';
import './App.css';
import {Main} from "./Presentation/views/Main";
import {AuthProvider} from "./Presentation/context/AuthContext";
import {CountryProvider} from "./Presentation/context/CountryContext";

function App() {
   return (
      <AuthProvider>
         <CountryProvider>
            <Main/>
         </CountryProvider>
      </AuthProvider>
   );
}
export default App;
