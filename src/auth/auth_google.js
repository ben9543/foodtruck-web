import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = async()=>{
    await signInWithRedirect(auth, provider)
        .catch(err => console.log(err));
}

/*
Optional: 
Specify additional OAuth 2.0 scopes that you want to request from the authentication provider. 
To add a scope, call addScope. For example:
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
*/

/*
You can Redirect user by using signInWithRedirect(auth, provider);
*/