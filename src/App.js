import { useEffect } from "react";
import AppBar from './components/AppBar';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onDisconnect, ref } from "firebase/database";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { homePage } from "./redux/slices/pageSlice";
import { signInFoodTruck, signInUser, signOutUser } from "./redux/slices/userSlice";
import { setLoading, endLoading } from "./redux/slices/loadingSlice";

// Libraries
import { ToastContainer, toast } from 'react-toastify';
import Loading from "react-simple-loading";
import { getFoodtruck } from "./firebase";
import Application from "./pages/Application";

let authFlag = true;

function App() {
  const db = getDatabase();
  const user = useSelector((state) => state.user);
  const isFoodTruck = useSelector((state) => state.user.foodTruck);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const foodTruckRef = ref(db, 'foodtrucks/' + user.uid);
  const auth = getAuth();
  const dispatch = useDispatch();
  
  // Handle toastify updates
  useEffect(() => {
    if(error.errorCode)
      toast.error(`${error.errorCode}: ${error.errorMessage}`);
  }, [error]);
  useEffect(() => {
    if(user.loggedIn){
      toast.success("Logged In");
    }
  }, [user]);

  // When window is closed or user disconnected without clicking logout button
  if (isFoodTruck && foodTruckRef){
    onDisconnect(foodTruckRef).update({
      online: false
    });
  }

  // Authflag needed because onAuthStateChanged get triggered twice
  onAuthStateChanged(auth, async(user) => {
    if(authFlag){
      authFlag = false;
      dispatch(setLoading());
      if (user) {
        const ft = await getFoodtruck(user.uid);
        if (ft){
          dispatch(signInFoodTruck({
            uid:user.uid, 
            email: user.email, 
            truckName: ft.truckName, 
            closeAt: ft.closeAt,
            info: ft.info}));
        }else{
          dispatch(signInUser({uid:user.uid, email: user.email}));
        }
        dispatch(endLoading());
      } else if (user === null) {
        dispatch(signOutUser());
        dispatch(endLoading());
      }
      
    } // authFlag ends
    dispatch(homePage());
  });

  // Loading component
  if (loading.loading) return <Loading/>
  return (
    <div className="App text-gray-800" >
      <AppBar title={"Foodtruck Hacker"}/>
      {
          <Application/>
      }
      <ToastContainer 
        position="bottom-right"
      />
    </div>
  );
}

export default App;
