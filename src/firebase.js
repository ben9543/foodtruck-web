// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { collection, query, doc, setDoc, getDoc, getDocs, getFirestore  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Email and Password Authentication
export const auth = getAuth();
export const signUpCustom = async(email, password, setErrorMsg) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(`${errorCode}: ${errorMessage}`);
            // console.log(errorCode, errorMessage)
        });
    // console.log();
    // Do something with userCredential ...
}
export const signInCustom = async(email, password, setErrorMsg, uid) => {
    const UC = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(`${errorCode}: ${errorMessage}`);
        });
    if (UC){
      if (UC.user.uid == uid)
        console.log("The user is Foodtruck")
    }
    // Do something with userCredential if you want to
}
export const signOutCustom = async() => {
  await signOut(auth)
    .catch(err => console.log(err));
}

export const getCurrentUser = () => auth.currentUser;

// Realtime Database
const realtime_db = getDatabase(app);
export const writeUserData = (name, email, imageUrl) => {
  const newUserRef = ref(realtime_db, 'users/');
  set(newUserRef, {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

export const writeFoodTruckData = ({foodtruckId, lat, lng, name}) => {
  const user = getCurrentUser();
  if (true){ // Check if the user is foodtruck owner or not
    set(ref(realtime_db, 'foodtrucks/' + foodtruckId), {
      lat,
      lng,
      name
    });
  }
}

export const listenTo = (path, updateCallback) => {
  const allRef = ref(realtime_db, path);
  onValue(allRef, (snapshot) => {
    const data = snapshot.val();
    updateCallback(data);
  });
}

// FireStore
const db = getFirestore(app);
export const getFoodtrucks = async() => {
  const q = query(collection(db, "foodtrucks"));
  const querySnapshot = await getDocs(q);
  /*querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });*/
  return querySnapshot;
}
export const getFoodtruck = async() => {
  // ...
}
export const isFoodtruck = async({auth_id}) => {
  // Add a new document in collection "cities"
  const docRef = doc(db, "foodtrucks", auth_id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
}

export const setFoodtrucks = async({uid}) => {
  await setDoc(doc(db, "foodtrucks", uid), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
}

export const signUpCustomFoodtruck = async(email, password, setErrorMsg) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode}: ${errorMessage}`);
          // console.log(errorCode, errorMessage)
      });
  // set userCredential.uid to firestore
}