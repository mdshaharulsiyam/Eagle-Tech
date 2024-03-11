import React, { createContext, useEffect, useState } from 'react'
export const EagleTechSpotContext = createContext(null)
import { getAuth, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import { app } from '../Firebase/config';
import Swal from 'sweetalert2';
const auth = getAuth(app)
const Context = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [loading, setloading] = useState(true)
  const [currentuser, setcurrentuser] = useState(null)
  const [currentuserphoto, setcurrentuserphoto] = useState(null)
  const host = "https://new-folder-gf1xemlo8-mdshaharulsiyams-projects.vercel.app"
  const signupuser = (password, email, username) => {
    setloading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: `${username}`,
        }).then(() => {
          setcurrentuser(user.displayName)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'user created successfully',
            showConfirmButton: false,
            timer: 1500
          })
          setloading(false)
        }).catch((error) => {
          console.log(error)
          setloading(false)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(
          'opps!!',
          `${errorMessage}`,
          'error'
        )
        setloading(false)
      });

  }

  const signwithpasswordandemail = (email, password) => {
    setloading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setcurrentuser(user.displayName)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'logged in successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setloading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(
          'opps!!',
          `${errorMessage}`,
          'error'
        )
        console.log(error)
      });

    setloading(false)
  }
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setcurrentuser(user.displayName)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'logged in successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setloading(false)
        console.log(result)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(
          'opps!!',
          `${errorMessage}`,
          'error'
        )
      });
      setloading(false)
  }
  useEffect(() => {
    setloading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentuser(user.displayName)
        setcurrentuserphoto(user.photoURL)
        setloading(false)
      } else {
        setcurrentuser(null)
        setloading(false)
      }
      return () => {
        unsubscribe()
      }
    });
  }, [])
  const handelsignout = () => {
    return signOut(auth)
  }
  const contextData = {
    host,
    signupuser,
    signwithpasswordandemail,
    currentuser,
    loading,
    signinWithGoogle,
    currentuserphoto,
    handelsignout
  }
  return (
    <EagleTechSpotContext.Provider value={contextData}>
      {children}
    </EagleTechSpotContext.Provider>
  )
}

export default Context
