import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAe46XXZjXdx-9Vuh-ia8kfrusk6wypX1A",  
    authDomain: "rocket-searcher-ts.firebaseapp.com",      
    projectId: "rocket-searcher-ts",     
    storageBucket: "rocket-searcher-ts.appspot.com",    
    messagingSenderId: "606405435124",      
    appId: "1:606405435124:web:8ae28ed6e18382583148a1",   
    measurementId: "G-VXS1REWEHW"
};
    
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log(docs, "docs")
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    const token = await auth.currentUser?.getIdToken() || ""
    localStorage.setItem('token', token)
    console.log(token, 'usertest')
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email: string, password : string) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      const token = await data.user.getIdToken()
      console.log(token, "token")
      localStorage.setItem('token', token)
      console.log(data, "data")
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
}
const registerWithEmailAndPassword = async (name: string, email : string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
};
const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
    localStorage.removeItem("token")
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}