import {useEffect} from "react";
import MainViewModel from "../view-models/MainViewModel";

const MainViewController = () => {
  const {auth} = MainViewModel();
   useEffect(() => {
      auth();
   }, [])
}
export default MainViewController;
