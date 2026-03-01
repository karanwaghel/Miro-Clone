import {createContext, useContext, useEffect, useState } from "react";
import {auth, GoogleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";


export const AuthContext = createContext();

export const useAuth = ()=>{
  return useContext(AuthContext)
}   

function AuthProvider({children}){

  const [CurrentUser,setCurrentUser] = useState(null);
  const [Loading,setLoading] = useState(true)


  useEffect(()=>{
    const Unsubscribe = onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user);
      setLoading(false);
    });
      return Unsubscribe;
    
  },[])


  const handleForgotPassword = async({email})=>{
    try{
      return await sendPasswordResetEmail(auth,email)
    }
    catch(err){
      throw err
    }
  }

  const SignIn = async({email,password})=>{
    try{
      return await createUserWithEmailAndPassword(auth,email,password)
    }catch(err){
      throw err
    }
  }

  const Login = async({email,password})=>{
    try{
      return await signInWithEmailAndPassword(auth,email,password);
    }catch(err){
      throw err
    }
  }

  const LoginWithGoogle = async()=>{
    try{
      return await signInWithPopup(auth,GoogleProvider)
    }catch(err){
      throw err
    }
  }


  const LogOut =()=>{
    return signOut(auth)
  }

  const getFirebaseErrorMessage = (error) => {
  switch (error.code) {
    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/wrong-password":
      return "Incorrect password. Please try again.";

    case "auth/invalid-email":
      return "Invalid email format.";

    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";

    case "auth/network-request-failed":
      return "Network error. Check your internet connection.";

    case "auth/invalid-credential":
      return "Invalid email or password."

    default:
      return "Something went wrong. Please try again.";
  }
};



  const value = {
    CurrentUser,
    Loading,
    SignIn,
    Login,
    LoginWithGoogle,
    LogOut,
    getFirebaseErrorMessage,
    handleForgotPassword,
  }

  return (
   <>
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
   </>
  )
}

export default AuthProvider;