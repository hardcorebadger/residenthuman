import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import {useEffect, useState} from 'react';

const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState(null);

  // useEffect(() =>{
  //    const unlisten = onAuthStateChanged(auth, (authUser) => {
  //     authUser
  //           ? setAuthUser(authUser)
  //           : setAuthUser(null);
  //       },
  //    );
  //    return () => {
  //        unlisten();
  //    }
  // }, []);

  return authUser
}

export default useFirebaseAuthentication;