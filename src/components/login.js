import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    

    const handleButtonClick = () => {
      //Validate the form data

      // console.log(email.current.value);
      // console.log(password.current.value);
      // console.log(name.current.value);

      const message = checkValidData(email.current.value, password.current.value,);
      setErrorMessage(message);
      if(message) return;

      //sign In sign Up login
      if(!isSignInForm){
         createUserWithEmailAndPassword(
          auth,
          email.current.value, 
          password.current.value 
        )
         .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
       });
      }
      else{
        signInWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
        .then((userCredential) => {
        // Signed in 
         const user = userCredential.user;
         console.log(user);
       })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + "-" + errorMessage)
       });

      }
    };

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
        alt='backgroundlogo'/>
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
        >
        <h1 className='font-bold text-3xl py-4'> 
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignInForm && (
        <input
        ref={name}
         type='text'
         placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-500'>
        </input>)}

        <input
        ref={email}
         type='text'
         placeholder='Email Address' 
         className='p-4 my-4 w-full bg-gray-500'
         />
        
        <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-500'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button 
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm 
            ? "New to Netflix? Sign Up Now" 
            : "Already registered? Sign In Now"}
        </p>
        
      </form>
    </div>
  )
}

export default Login;
