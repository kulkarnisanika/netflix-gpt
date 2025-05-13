import React, { useState, useEffect } from 'react'
import Header from './Header'
import { getValidations } from '../utils/getValidations';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { IMG_URLS, FORM_FIELDS } from '../utils/constants';
import LANGUAGE_CONSTANTS from '../utils/languageConstants';

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('')
    const [name, setName] = useState('')
    const [disablePrimaryButton, setDisablePrimaryButton] = useState(false);

    const configuredLanguage = useSelector((store) => store?.appConfig?.lang);
    const dispatch = useDispatch();


    useEffect(() => {
        if (email === '' || password === '' || validationError !== '')
            setDisablePrimaryButton(true)
        else
            setDisablePrimaryButton(false)
    }, [email, password]);

    //CONSTANTS DECLARATION
    const { LABELS: { SIGN_UP, SIGN_IN, SIGN_UP_NOW } = {},
        VALIDATION_ERRORS: { PASSWORD_UNVALID, NAME_UNVALID, EMAIL_UNVALID } = {},
        LABELS: {FULL_NAME_PLACEHOLDER,PASSWORD_PLACEHOLDER,EMAIL_PLACEHOLDER,ALREADY_HAVE_AN_ACCOUNT,NEW_TO_CINEGPT} = {}
    } = LANGUAGE_CONSTANTS?.[configuredLanguage] || {};

    const { EMAIL, PASSWORD, NAME } = FORM_FIELDS;

    let getHeading = () => {
        return isLoggedIn ? SIGN_IN : SIGN_UP;
    }

    let toggleLoggedInStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    let validateInputField = (value, field) => {
        let checkValidation = getValidations(value, field);
        if (checkValidation) {
            if (field === EMAIL)
                setEmail(value)
            else if (field === PASSWORD)
                setPassword(value)
            else if (field === NAME)
                setName(value)
            setValidationError("")
        }
        else {
            if (value === "")
                return
            else if (field === EMAIL)
                setValidationError(EMAIL_UNVALID)
            else if (field === PASSWORD)
                setValidationError(PASSWORD_UNVALID)
            else if (field === NAME)
                setValidationError(NAME_UNVALID)
        }
    }

    let onPrimaryButtonClick = () => {
        if (!isLoggedIn) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName } = auth?.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }));
                    }).catch((error) => {
                        setValidationError(error?.message)
                    });
                })
                .catch((error) => {
                    setValidationError(error?.message)
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
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
                <img src={IMG_URLS?.BACKGROUND_IMG}
                    alt="CineGPT-bg-image"
                    className='fixed w-full h-screen lg:h-full xl:h-full object-cover'
                />
            </div>
            <form className='absolute text-white w-9/12 sm:w-5/12 lg:w-3/12 xl:w-3/12 mx-auto left-0 right-0 my-40 px-7 py-8 bg-black bg-opacity-80 rounded' onSubmit={(e) => e.preventDefault()}>
                <h1 className='text-3xl font-bold pb-3'>{getHeading()}</h1>
                {
                    isLoggedIn === false && (
                        <input className=' my-3 p-3 w-full bg-gray-950 bg-opacity-50 rounded' type="text" placeholder={FULL_NAME_PLACEHOLDER} name="name" onBlur={(e) => { validateInputField(e.target.value, e.target.name) }} />
                    )
                }
                <input className=' my-3 p-3 w-full bg-gray-950 bg-opacity-50 rounded' type="text" placeholder={EMAIL_PLACEHOLDER} name="email" onBlur={(e) => { validateInputField(e.target.value, e.target.name) }} onChange={(e) => { validateInputField(e.target.value, e.target.name) }} />
                <input className=' my-3 p-3 w-full bg-gray-950 bg-opacity-50 rounded' type="password" placeholder={PASSWORD_PLACEHOLDER} name="password" onChange={(e) => { validateInputField(e.target.value, e.target.name) }} onBlur={(e) => { validateInputField(e.target.value, e.target.name) }} />
                {validationError && <p className="text-red-500 text-sm mt-1 p-3">{validationError}</p>}
                <button className={`my-3 p-3 mt-4 w-full rounded ${disablePrimaryButton ? "bg-red-900 cursor-not-allowed opacity-50" : "bg-rose-600"}`} disabled={disablePrimaryButton} onClick={onPrimaryButtonClick}>{getHeading()}</button>
                <p className='my-4 p-3 mt-4 w-full'>
                    <span className='text-2 text-gray-300'> {isLoggedIn ? NEW_TO_CINEGPT : ALREADY_HAVE_AN_ACCOUNT} </span>
                    <span className='text-2 font-bold text-gray-300 cursor-pointer' onClick={toggleLoggedInStatus}>{isLoggedIn ? SIGN_UP_NOW : SIGN_IN}</span>
                </p>
            </form>
        </div>
    )
}

export default Login;