import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { IMG_URLS, LABELS, SUPPORTED_LANGUAGES } from '../utils/constants';
import { enableGptSearchFeature } from '../utils/gptSlice';
import {updateLanguage} from "../utils/configSlice"
import LANGUAGE_CONSTANTS from '../utils/languageConstants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store?.user);
  const enableGptSearch = useSelector((store) => store?.gpt?.enableGptSearch);
  const configuredLanguage = useSelector((store) => store?.appConfig?.lang);

  const { LABELS = {} } = LANGUAGE_CONSTANTS?.[configuredLanguage] || {};
  const { AVTAR_URL, LOGO_URL } = IMG_URLS;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [])

  const handleLanguageChange = (e) => {
    dispatch(updateLanguage(e?.target.value))
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  const handleGptToggle = () => {
    dispatch(enableGptSearchFeature())
  }

  return (
    <div className="absolute bg-gradient-to-t from-black z-10 w-screen sm:flex md:flex justify-between">
      <img className="mx-auto md:mx-2 sm:mx-2 w-52 py-2 px-8" src={LOGO_URL}
        alt="netflix-logo"
      />
      {
        user &&
        <div
          className='flex pb-4 md:p-4 sm:p-4 mx-10 items-center gap-4 justify-center md:justify-normal flex-wrap '>
          <select
            className='bg-red-800 p-2 rounded text-white'
            onChange={handleLanguageChange}
            value={configuredLanguage}
          >
            {
              SUPPORTED_LANGUAGES.map(
                (lang) => (
                  <option className='bg-black opacity-80 text-white text-sm'
                    key={lang?.identifier}
                    value={lang?.identifier}>
                    {lang?.value}
                  </option>
                )
              )
            }
          </select>

          <button
            className='text-white bg-violet-900 px-4 py-2 cursor-pointer rounded'
            onClick={handleGptToggle}
          >
            {enableGptSearch ? LABELS?.BROWSE_MOVIES : LABELS?.GPT_SEARCH}
          </button>

          <img src={AVTAR_URL}
            alt="user logo"
            className='w-9 h-9'
          />

          <button
            className='text-white font-bold cursor-pointer'
            onClick={handleSignOut}>
            {LABELS?.SIGN_OUT}
          </button>

        </div>
      }

    </div>
  )
}

export default Header