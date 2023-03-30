import {createContext} from "react";
import firebaseApp, {auth} from "../config/firebase";

export const FirebaseContext = createContext(null);

export function FirebaseProvider({children}) {
  return (
    <FirebaseContext.Provider value={{auth, firebaseApp}}>
      {children}
    </FirebaseContext.Provider>
  );
}
