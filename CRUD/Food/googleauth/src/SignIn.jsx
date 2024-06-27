import React, { useEffect, useState } from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from './Config';
import Home from './Home';

function SignIn() {
    const[value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth,googleProvider)
        localStorage.setItem("email", value.user.email)
        .then(()=>{
            setValue(value.user.email)
        }) .catch((error)=>{
            alert(error)
        })
    }

    useEffect(()=>{
        let userEmail = localStorage.getItem('email')
        if (userEmail) {
            setValue(userEmail)
        } 
    },[])

  return (
    <div>
       {value ? <Home /> :<button onClick={handleClick}>Click here to connent with google</button>}
    </div>
  )
}

export default SignIn
