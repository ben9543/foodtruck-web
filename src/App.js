import { useEffect } from "react";
import Auth from "./pages/Auth";
import Map from "./pages/Map";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { signInFoodTruck, signInUser, signOutUser } from "./redux/slices/userSlice";
// import { setError } from "./redux/slices/errorSlice";
import { setLoading, endLoading } from "./redux/slices/loadingSlice";

// Libraries
import { ToastContainer, toast } from 'react-toastify';
import Loading from "react-simple-loading";
import { isFoodtruck } from "./firebase";

let authFlag = true;

function App() {
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
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

  // Authflag needed because onAuthStateChanged get triggered twice
  onAuthStateChanged(auth, async(user) => {
    if(authFlag){
      authFlag = false;
      dispatch(setLoading());
      if (user) {
        if (await isFoodtruck(user.uid))
          dispatch(signInFoodTruck({uid:user.uid, email: user.email}));
        else
          dispatch(signInUser({uid:user.uid, email: user.email}));
        dispatch(endLoading());
      } else if (user == null) {
        dispatch(signOutUser());
        dispatch(endLoading());
      }
    } // authFlag ends
  });

  // Loading component
  if (loading.loading) return <Loading/>
  return (
    <div className="App text-gray-800">
      {JSON.stringify(user)}
      <br/>
      {JSON.stringify(error)}
      <p>{JSON.stringify(loading)}</p>
      {
        !user.loggedIn ?
          <Auth/>
            :
          <Map/>
      }
      <ToastContainer 
        position="bottom-right"
      />
    </div>
  );
}

export default App;
