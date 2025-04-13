import React, { useState, useEffect } from 'react'
import Header from './Header'
import { getValidations } from '../utils/getValidations';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('')
    const [name, setName] = useState('')
    const [disablePrimaryButton, setDisablePrimaryButton] = useState(false);

    useEffect(() => {
        if (email == '' || password == '')
            setDisablePrimaryButton(true)
        else
            setDisablePrimaryButton(false)

    }, [email, password]);

    const navigate = useNavigate();


    let getHeading = () => {
        return isLoggedIn ? 'Sign In' : 'Sign Up'
    }

    let toggleLoggedInStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    
    let validateInputField = (value, field) => {
        let checkValidation = getValidations(value, field);
        if (checkValidation) {
            if (field === "email")
                setEmail(value)
            else if (field === "password")
                setPassword(value)
            else if (field === "name")
                setName(value)

            setValidationError('')


        }
        else {
            if(value === "")
                return
            else if (field === "email")
                setValidationError("Email is not valid")
            else if (field === "password")
                setValidationError("Password is not valid")
            else if (field === "name")
                setValidationError("Please enter proper name")
        }
    }
    
    let onPrimaryButtonClick = () => {
        if(!isLoggedIn){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    navigate('/browse');
                  }).catch((error) => {
                    setValidationError(error?.message)
                  });
            })
            .catch((error) => {
                setValidationError(error?.message)
            });
        }else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              navigate('/browse');
            })
            .catch((error) => {
                setValidationError(error?.message)
            });
        }

    }



    return (
        <div>

            <Header />
            <div className='absolute h-screen w-full'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"
                    alt="netflix=bg-image"
                />
            </div>
            <form className='absolute text-white w-3/12 mx-auto left-0 right-0 my-40 px-7 py-8 bg-black bg-opacity-80 rounded' onSubmit={(e) =>  e.preventDefault()}>
                <h1 className='text-3xl font-bold pb-3'>{getHeading()}</h1>
                {
                    isLoggedIn === false && (
                        <input className=' my-3 p-3 w-full bg-gray-950 bg-opacity-50 rounded' type="text" placeholder="Full Name" name="name" onBlur={(e) => { validateInputField(e.target.value, e.target.name) }} />
                    )
                }
                <input className=' my-3 p-3 w-full bg-gray-950 bg-opacity-50 rounded' type="text" placeholder="Email" name="email" onBlur={(e) => { validateInputField(e.target.value, e.target.name) }} />
                <input className=' my-3 p-3 w-full bg-gray-950 bg-opacity-50 rounded' type="password" placeholder="Password" name="password" onBlur={(e) => { validateInputField(e.target.value, e.target.name) }} />
                {validationError && <p className="text-red-500 text-sm mt-1 p-3">{validationError}</p>}
                <button className={`my-3 p-3 mt-4 w-full rounded ${disablePrimaryButton ? "bg-red-900 cursor-not-allowed opacity-50" : "bg-rose-600"}`} disabled={disablePrimaryButton} onClick={onPrimaryButtonClick}>{getHeading()}</button>
                <p className='my-4 p-3 mt-4 w-full'>
                    <span className='text-2 text-gray-300'> {isLoggedIn ? "New to Netflix" : "Already have an account?"} </span>
                    <span className='text-2 font-bold text-gray-300 cursor-pointer' onClick={toggleLoggedInStatus}>{isLoggedIn ? 'Sign up now.' : 'Sign In'}</span>
                </p>
            </form>
        </div>
    )
}

export default Login